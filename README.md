# Adventure Escape SA Website

**Explore. Experience. Escape.**

A multi-page website for Adventure Escape SA, a Western Cape company offering guided outdoor adventures for individuals, families, tourists, schools and corporate groups. The site mirrors the Adventure Escape SA mobile app and was built for the Work Integrated Learning module.

## Pages

| Page | File | What it does |
| --- | --- | --- |
| Home | `index.html` | Welcome banner and popular activities |
| About Us | `about.html` | Company story, mission and who we serve |
| Overview | `overview.html` | All adventures, with All / Hiking / Water / Outdoor filters |
| Individual page | `activity.html` | Details for one adventure (Mountain Hiking, Water Adventures or Outdoor Exploration) |
| Calculate Fees | `fees.html` | Estimates the cost for a group, including the group discount |
| Contact Us | `contact.html` | Phone, email, map link, social links and an enquiry form |

## Features

- Filter adventures by category on the Overview page
- One individual page template that loads any adventure, for example `activity.html?a=hiking`
- Fee calculator for adults and children across one or more adventures
- 10% group discount for 10 or more participants (demonstration rule)
- Responsive layout that works on phones, tablets and desktops
- Keyboard-friendly focus styles and high-contrast colours

## Built with

- HTML5
- CSS3
- JavaScript (no frameworks or libraries)
- Google Fonts: Montserrat (headings) and Open Sans (body)

## Colour palette

| Colour | Hex |
| --- | --- |
| Forest Green | `#2E7D32` |
| Sunset Orange | `#FF9800` |
| Mountain Grey | `#616161` |
| Sky Blue | `#4FC3F7` |
| White | `#FFFFFF` |

## Project structure

```
adventure-escape-site/
├── index.html
├── about.html
├── overview.html
├── activity.html
├── fees.html
├── contact.html
├── style.css
├── script.js
└── README.md
```

## How to run

1. Download or clone this repository.
2. Open the folder in Visual Studio Code.
3. Install the **Live Server** extension.
4. Right-click `index.html` and choose **Open with Live Server**.

You can also open `index.html` directly in a browser. An internet connection is needed to load the Google Fonts.

## Adventure prices

| Adventure | Adult | Child |
| --- | --- | --- |
| Mountain Hiking | R500.00 | R250.00 |
| Water Adventures | R650.00 | R325.00 |
| Outdoor Exploration | R450.00 | R225.00 |

To change prices or adventure details, edit the `A` object at the top of `script.js`.

## Known limitations

- The enquiry form is a demonstration. It shows a thank-you message but does not send anything.
- The Instagram and Facebook buttons use placeholder links (`#`). Replace them with the official profile URLs.
- The phone number and email address are sample details.
- Duration and difficulty for Water Adventures and Outdoor Exploration are placeholders.
- There is no online booking or payment. The fee calculator gives an estimate only.

## Team

- [ST10517860]
- [ST10457180]
- [ST10533474]

## Module details

- **Module:** Work Integrated Learning
- **Scenario:** 7.2 Adventure Escape SA
