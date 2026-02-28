# Digital Twin Market Engine - FMCG Launch Simulator

An interactive market simulation platform for testing FMCG product launch strategies using AI-powered synthetic customer personas. Specifically designed for a **Women's Protein Drink** targeting the Indian market.

## 🎯 Overview

This simulator uses **500 synthetic customer personas** derived from 8 core behavioral archetypes to predict market response to various product configurations and marketing strategies. It provides real-time insights into purchase probability, market segmentation, and strategic recommendations.

## ✨ Features

### Interactive Product Configuration
- **Dynamic Pricing**: Test different price points (₹299 - ₹599)
- **Product Features**: Toggle sugar-free formulation
- **Packaging Options**: Standard vs. Premium packaging
- **Marketing Channels**: Evaluate influencer marketing impact

### Real-Time Market Simulation
- Purchase probability calculation across all 500 personas
- Weighted market response based on segment representation
- Demographic breakdown by city type, income level, and age groups
- Risk assessment and strategic insights

### Visualization & Analytics
- **Market Segmentation Charts**: Bar charts showing response by demographics
- **Price Sensitivity Analysis**: Line chart showing optimal pricing strategy
- **Key Metrics Dashboard**: Overall probability, revenue projections, target segments
- **Behavioral Insights**: Top purchasing personas and customer objections

## 🗂️ Project Structure

```
├── index.html                    # Main simulator interface (944 lines)
├── generate_personas.html        # Persona generation tool
├── personas.json                 # 8 base persona templates with descriptions
├── all_500_personas.json         # Complete dataset of 500 generated personas
├── personas.csv                  # Base personas in CSV format
├── all_500_personas.csv          # 500 personas in CSV format (current file)
├── PERSONAS_DOCUMENTATION.md     # Detailed methodology documentation
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or server required - runs entirely in browser

### Usage

1. **Open the Simulator**
   ```
   Open index.html in your web browser
   ```

2. **Configure Your Product**
   - Adjust price using the slider (₹299 - ₹599)
   - Toggle sugar-free option (Yes/No)
   - Select packaging type (Standard/Premium)
   - Enable/disable influencer marketing

3. **Run Simulation**
   - Click the "🚀 Run Simulation" button
   - View real-time results in the dashboard
   - Analyze charts, metrics, and strategic insights

4. **Generate Custom Personas** (Optional)
   ```
   Open generate_personas.html to regenerate the 500-persona dataset
   ```

## 👥 Persona Architecture

### 8 Base Persona Templates

| Persona | Market Share | Income | Health Consciousness | Price Sensitivity |
|---------|--------------|--------|---------------------|-------------------|
| **Working Professional** | 20% | Medium | 7/10 | 6/10 |
| **Budget-Conscious Mother** | 18% | Medium | 6/10 | 8/10 |
| **Urban Health Enthusiast** | 15% | High | 9/10 | 3/10 |
| **Traditional Homemaker** | 15% | Low | 5/10 | 9/10 |
| **Fitness-Focused Millennial** | 12% | High | 10/10 | 2/10 |
| **Young Student** | 10% | Low | 4/10 | 10/10 |
| **Senior Citizen** | 6% | Medium | 8/10 | 7/10 |
| **Corporate Executive** | 4% | High | 7/10 | 4/10 |

### Generation Methodology
- Each template is replicated ~62-63 times
- Random variations applied to:
  - Age within persona-specific range
  - Health consciousness (±1 point)
  - Price sensitivity (±1 point)
  - Brand loyalty (±1 point)
- Total: **500 unique personas** representing the Indian women's market

## 🧮 Purchase Probability Algorithm

The simulation calculates purchase probability using a multi-factor model:

```
Base Probability = 50%

+ Price Impact = (10 - priceSensitivity) × priceScore × 0.3
  where priceScore = (1 - (price - 299) / 300) × 10

+ Health Impact = healthConsciousness × 1.5 (if sugar-free enabled)
               OR healthConsciousness × -0.8 (if sugar-free disabled)

+ Packaging Impact = brandLoyalty × 0.8 (if premium)
                   + 5% bonus for High income

+ Marketing Impact = (11 - brandLoyalty) × 0.7 (if influencer enabled)
                   + 8% bonus for Urban & age < 35

+ Income Adjustments:
  - Low income & price > ₹399: -15%
  - High income: +5%

Final Probability = Clamp(result, 0-100%)
```

## 📊 Data Files

### JSON Format (`all_500_personas.json`)
```json
{
  "id": 47,
  "name": "Urban Health Enthusiast",
  "age": 32,
  "cityType": "Urban",
  "incomeLevel": "High",
  "healthConsciousness": 8.7,
  "priceSensitivity": 3.2,
  "brandLoyalty": 7.4,
  "weight": 0.3
}
```

### CSV Format (`all_500_personas.csv`)
Comma-separated values with headers:
`id,name,age,cityType,incomeLevel,healthConsciousness,priceSensitivity,brandLoyalty,weight`

## 🛠️ Technical Details

### Technologies Used
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Visualization**: Chart.js 4.4.0
- **Architecture**: Client-side only, no backend required
- **Data**: Embedded JSON, dynamically loaded

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📈 Use Cases

- **Product Managers**: Test pricing strategies before market launch
- **Marketing Teams**: Evaluate campaign effectiveness across segments
- **Business Analysts**: Understand customer behavior patterns
- **Academic Research**: Study market simulation methodologies
- **Sales Strategy**: Identify high-value target segments

## 🤝 Contributing

To modify the simulation:
1. Edit persona attributes in `all_500_personas.json`
2. Adjust probability calculations in `index.html` (line 584+)
3. Regenerate personas using `generate_personas.html`

## 📝 Documentation

For detailed methodology and examples, see [PERSONAS_DOCUMENTATION.md](PERSONAS_DOCUMENTATION.md)

## 📅 Version

Current Date: February 28, 2026

---

**Built with ❤️ for data-driven product launches**
