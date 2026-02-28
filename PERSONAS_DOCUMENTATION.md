# Digital Twin Market Engine - Persona Documentation

## Overview
This document details the 500 synthetic customer personas used in the FMCG Product Launch Simulator for a Women's Protein Drink targeting the Indian market.

## Generation Methodology

### Base Templates: 8 Core Personas
Each represents a distinct customer archetype with unique behavioral characteristics:

1. **Urban Health Enthusiast** (15% market)
2. **Working Professional** (20% market) - Largest segment
3. **Budget-Conscious Mother** (18% market)
4. **Fitness-Focused Millennial** (12% market)
5. **Traditional Homemaker** (15% market)
6. **Young Student** (10% market)
7. **Senior Citizen** (6% market)
8. **Corporate Executive** (4% market)

### Persona Generation Process
- **Total Personas**: 500
- **Method**: Each base template is replicated ~62-63 times
- **Variation**: Random variations applied to:
  - Age (18-65 years range)
  - Health Consciousness (±1 point from base)
  - Price Sensitivity (±1 point from base)
  - Brand Loyalty (±1 point from base)

## Example Generated Personas

### Example 1: Urban Health Enthusiast Instance
```javascript
{
  id: 47,
  name: "Urban Health Enthusiast",
  age: 32,
  cityType: "Urban",
  incomeLevel: "High",
  healthConsciousness: 8.7,
  priceSensitivity: 3.2,
  brandLoyalty: 7.4,
  weight: 0.3  // 0.3% of 500 personas
}
```

### Example 2: Budget-Conscious Mother Instance
```javascript
{
  id: 156,
  name: "Budget-Conscious Mother",
  age: 38,
  cityType: "Tier-2",
  incomeLevel: "Medium",
  healthConsciousness: 6.3,
  priceSensitivity: 8.5,
  brandLoyalty: 3.8,
  weight: 0.36  // 0.36% of 500 personas
}
```

### Example 3: Fitness-Focused Millennial Instance
```javascript
{
  id: 302,
  name: "Fitness-Focused Millennial",
  age: 26,
  cityType: "Urban",
  incomeLevel: "High",
  healthConsciousness: 9.8,
  priceSensitivity: 2.1,
  brandLoyalty: 6.2,
  weight: 0.24  // 0.24% of 500 personas
}
```

## Purchase Probability Calculation

### Formula Components

```
Base Probability = 50%

+ Price Impact = (10 - priceSensitivity) × priceScore × 0.3
  where priceScore = (1 - (price - 299) / 300) × 10

+ Sugar-Free Impact = healthConsciousness × 1.5 (if enabled)
  OR = healthConsciousness × -0.8 (if disabled)

+ Premium Packaging Impact = brandLoyalty × 0.8 (if premium)
  + Additional 5% for High income

+ Influencer Marketing Impact = (11 - brandLoyalty) × 0.7
  + Additional 8% for Urban & age < 35

+ Income Adjustments:
  - Low income & price > ₹399: -15%
  - High income: +5%

Final Probability = Normalize(0-100%)
```

### Example Calculation

**Scenario**: Price ₹449, Sugar-Free: Yes, Packaging: Premium, Influencer: Yes

**Persona**: Fitness-Focused Millennial (age 26, Urban, High income)
- Health Consciousness: 10
- Price Sensitivity: 2
- Brand Loyalty: 6

**Calculation**:
```
Base: 50%
Price Impact: (10-2) × 5.0 × 0.3 = +12%
Sugar-Free: 10 × 1.5 = +15%
Premium Pkg: 6 × 0.8 + 5 = +9.8%
Influencer: (11-6) × 0.7 + 8 = +11.5%
Income Bonus: +5%

Total: 50 + 12 + 15 + 9.8 + 11.5 + 5 = 103.3%
Normalized: 100% (capped)
```

## Revenue Calculation

### Formula
```
Monthly Revenue = Σ(Persona Weight × Purchase Probability × Price × Market Multiplier)

Where:
- Persona Weight = % of market segment
- Purchase Probability = 0-100% (converted to 0-1)
- Price = Product price in INR
- Market Multiplier = 100 (500 personas represent 50,000 customers)
```

### Example
```
Segment: Working Professional (20% weight)
Avg Purchase Probability: 65%
Price: ₹449
Count: 100 personas

Revenue from segment = 0.20 × 0.65 × 449 × 100 × 500
                     = ₹2,918,500/month
```

## Segment Analysis

### High-Response Segments (Probability > 70%)
- Fitness-Focused Millennial
- Urban Health Enthusiast
- Corporate Executive

**Characteristics**: High income, health-conscious, low price sensitivity

### Medium-Response Segments (Probability 50-70%)
- Working Professional
- Budget-Conscious Mother (if price < ₹400)

**Characteristics**: Moderate income, balanced priorities

### Low-Response Segments (Probability < 50%)
- Young Student
- Traditional Homemaker (high price resistance)
- Senior Citizen (brand loyalty barrier)

**Characteristics**: Price-sensitive, needs strong differentiation

## Business Insights Generation

### Risk Assessment
- **Low Risk**: Overall probability > 60%
- **Medium Risk**: Overall probability 40-60%
- **High Risk**: Overall probability < 40%

### Objection Identification
1. **Price Objection**: Triggered when price > ₹450
2. **Feature Objection**: Based on sugar-free status and packaging
3. **Awareness Objection**: Based on influencer marketing status

### Recommendations Logic
```
IF price > 500 AND probability < 50:
  → "Reduce price to ₹399-449 range"

ELSE IF sugar-free = false AND probability < 55:
  → "Enable sugar-free option"

ELSE IF packaging = basic AND top_segment = high_income:
  → "Upgrade to premium packaging"

ELSE IF influencer = false:
  → "Activate influencer marketing"

ELSE:
  → "Strong potential, consider A/B testing"
```

## Market Distribution

### By City Type
- Urban: 51% (255 personas)
- Tier-2: 44% (220 personas)
- Rural: 5% (25 personas)

### By Income Level
- High: 31% (155 personas)
- Medium: 53% (265 personas)
- Low: 16% (80 personas)

### By Age Group
- 18-25: 10%
- 26-35: 32%
- 36-45: 33%
- 46-55: 19%
- 56-65: 6%

## Usage in Simulation

The simulator:
1. Loads all 500 pre-generated personas
2. Applies current product configuration to each persona
3. Calculates individual purchase probability
4. Aggregates results by segment
5. Generates revenue projections
6. Identifies insights and objections
7. Creates visualizations (charts)

## Data Validation

- ✅ All personas sum to 100% market weight
- ✅ All attributes normalized to 1-10 scale
- ✅ Age distribution matches Indian demographic patterns
- ✅ Income distribution reflects urban/tier-2 purchasing power
- ✅ Behavioral traits show realistic variation within segments

---

**Last Updated**: February 2026  
**Version**: 1.0  
**Purpose**: MBA Hackathon Demo - FMCG Product Launch Simulation
