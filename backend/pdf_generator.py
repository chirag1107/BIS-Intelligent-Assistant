import io
from datetime import datetime
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
    KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def generate_bis_compliance_pdf(data: dict) -> bytes:
    """
    Generates a professional Bureau of Indian Standards (BIS) Compliance Advisory Report
    using ReportLab. Returns PDF as bytes.
    """
    buffer = io.BytesIO()
    doc = SimpleDocTemplate(
        buffer,
        pagesize=A4,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    # Custom color palette matching BIS platform
    navy = colors.HexColor("#1A365D")
    navy_light = colors.HexColor("#2A5A9B")
    saffron = colors.HexColor("#EA580C")
    slate_dark = colors.HexColor("#0F172A")
    slate_gray = colors.HexColor("#64748B")
    bg_light = colors.HexColor("#F8FAFC")
    emerald = colors.HexColor("#059669")
    emerald_bg = colors.HexColor("#ECFDF5")

    # Custom typography styles
    title_style = ParagraphStyle(
        'BISTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=navy,
        spaceAfter=4
    )

    subtitle_style = ParagraphStyle(
        'BISSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=slate_gray,
        spaceAfter=12
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=navy_light,
        spaceBefore=12,
        spaceAfter=6
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=slate_dark
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=navy
    )

    table_cell = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=slate_dark
    )

    badge_style = ParagraphStyle(
        'BadgeText',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=emerald,
        alignment=1
    )

    disclaimer_style = ParagraphStyle(
        'DisclaimerText',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=7.5,
        leading=10,
        textColor=colors.HexColor("#94A3B8"),
        alignment=1
    )

    elements = []

    # 1. Header Banner Table
    header_data = [
        [
            Paragraph("<b>BUREAU OF INDIAN STANDARDS (BIS)</b><br/><font size=8 color='#64748B'>Ministry of Consumer Affairs, Food & Public Distribution • Govt. of India</font>", body_style),
            Paragraph("<b>SIH 2026 INNOVATION</b><br/><font size=8 color='#EA580C'>Smart India Hackathon Finalist</font>", ParagraphStyle('HRight', parent=body_style, alignment=2))
        ]
    ]
    header_table = Table(header_data, colWidths=[340, 180])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
    ]))
    elements.append(header_table)
    elements.append(HRFlowable(width="100%", thickness=1.5, color=navy, spaceBefore=4, spaceAfter=14))

    # 2. Document Title
    product_name = data.get("product_name", "Specified Product")
    elements.append(Paragraph(f"Statutory BIS Compliance Advisory: {product_name}", title_style))
    date_str = datetime.now().strftime("%B %d, %Y • %H:%M IST")
    elements.append(Paragraph(f"Advisory Dossier Generated on {date_str} • Reference: BIS-AI-SIH2026", subtitle_style))

    # 3. Key Findings Summary Box
    standard_code = data.get("standard", "Applicable IS Code")
    standard_full = data.get("standard_full", standard_code)
    scheme = data.get("scheme", "Scheme-I (ISI Mark)")
    mandatory = data.get("mandatory", True)
    status_text = "MANDATORY UNDER QUALITY CONTROL ORDER (QCO)" if mandatory else "VOLUNTARY / STANDARD SCHEME"

    summary_table_data = [
        [Paragraph("<b>Applicable Standard:</b>", table_cell_bold), Paragraph(f"<b>{standard_code}</b> — {standard_full}", body_style)],
        [Paragraph("<b>Regulatory Scheme:</b>", table_cell_bold), Paragraph(f"<b>{scheme}</b>", body_style)],
        [Paragraph("<b>Statutory Status:</b>", table_cell_bold), Paragraph(f"<font color='#059669'><b>{status_text}</b></font>", body_style)],
        [Paragraph("<b>Official Source:</b>", table_cell_bold), Paragraph(f"<font color='#1A365D'><u>{data.get('source_url', 'https://www.manakonline.in')}</u></font>", body_style)],
    ]
    summary_table = Table(summary_table_data, colWidths=[140, 380])
    summary_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), bg_light),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor("#CBD5E1")),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor("#E2E8F0")),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
    ]))
    elements.append(summary_table)
    elements.append(Spacer(1, 14))

    # 4. Mandatory Testing Protocols
    elements.append(Paragraph("1. Mandatory Laboratory Testing Protocols", section_heading))
    testing_items = data.get("testing") or [
        "High Voltage Insulation Resistance Verification Test",
        "Overload & Thermal Cutoff Safety Test",
        "Leakage Current & Mechanical Durability Test"
    ]
    
    test_table_data = [[
        Paragraph("<b>#</b>", table_cell_bold),
        Paragraph("<b>Prescribed Test Parameter</b>", table_cell_bold),
        Paragraph("<b>Statutory Conformity</b>", table_cell_bold)
    ]]
    for idx, test in enumerate(testing_items, 1):
        clean_test = test.replace("🔌", "").replace("⚡", "").replace("🛡️", "").replace("🌡️", "").replace("💪", "").replace("🔧", "").replace("💡", "").strip()
        test_table_data.append([
            Paragraph(str(idx), table_cell),
            Paragraph(clean_test, table_cell),
            Paragraph("<font color='#059669'><b>REQUIRED (BIS Lab)</b></font>", table_cell)
        ])

    test_table = Table(test_table_data, colWidths=[25, 365, 130])
    test_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor("#E2E8F0")),
        ('BOX', (0, 0), (-1, -1), 0.8, colors.HexColor("#CBD5E1")),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor("#E2E8F0")),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ]))
    elements.append(test_table)
    elements.append(Spacer(1, 14))

    # 5. Document Checklist
    elements.append(Paragraph("2. Required Documentation Checklist for Factory & Lab Audit", section_heading))
    doc_items = data.get("documents") or [
        "Full test report from BIS recognized lab (Form-V)",
        "Factory layout diagram and manufacturing machinery list",
        "Quality Control Plan (QCP) and in-house testing equipment calibration"
    ]

    doc_table_data = [[
        Paragraph("<b>Status</b>", table_cell_bold),
        Paragraph("<b>Documentation Requirement</b>", table_cell_bold)
    ]]
    for doc_item in doc_items:
        clean_doc = doc_item.replace("📋", "").replace("🏭", "").replace("📖", "").replace("📄", "").strip()
        doc_table_data.append([
            Paragraph("[  ] Pending", table_cell_bold),
            Paragraph(clean_doc, table_cell)
        ])

    doc_table = Table(doc_table_data, colWidths=[90, 430])
    doc_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor("#E2E8F0")),
        ('BOX', (0, 0), (-1, -1), 0.8, colors.HexColor("#CBD5E1")),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor("#E2E8F0")),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ]))
    elements.append(doc_table)
    elements.append(Spacer(1, 14))

    # 6. Step-by-Step Application Process
    elements.append(Paragraph("3. Statutory Licensing Roadmap (4 Steps)", section_heading))
    process_text = data.get(
        "process",
        "1. Apply online via Manakonline portal -> 2. Sample testing at BIS laboratory -> 3. Factory audit inspection -> 4. License grant & ISI Mark issuance"
    )
    elements.append(Paragraph(process_text, body_style))
    elements.append(Spacer(1, 20))

    # 7. Disclaimer & Footer
    elements.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#CBD5E1"), spaceBefore=8, spaceAfter=8))
    elements.append(Paragraph(
        "<b>STATUTORY DISCLAIMER:</b> This report is generated by the BIS Intelligent Assistant (Smart India Hackathon 2026). "
        "It provides non-binding advisory guidance based on official Bureau of Indian Standards documentation. "
        "Final compliance verification must be executed through the official Manakonline portal (manakonline.in) prior to commercial marketing.",
        disclaimer_style
    ))

    # Build document
    doc.build(elements)
    pdf_data = buffer.getvalue()
    buffer.close()
    return pdf_data
