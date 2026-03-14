---
layout: post
title: "#702 – Test Point Acupuncture"
date: 2025-09-15 00:00:01
categories: podcast
tags: [podcast_script]
---


[#702 – Test Point Acupuncture](https://traffic.libsyn.com/theamphour/TheAmpHour-702-TestPointAccupuncture.mp3)

**This is the Amp Hour**, released September 14th, 2025.
**Episode 702, Test Point Acupuncture.**

Welcome to the Amp Hour. I'm **Dave Jones** from the **EEVblog**.
And I'm **Chris Gamble** of **Contextual Electronics**.

## Dave's Refurbished Microsoft Surface Issues

Dave shares his frustration with a recently purchased refurbished **Microsoft Surface** laptop that exhibited multiple faults requiring its return.

### Battery Charging Fault

The laptop arrived with approximately **70% battery charge** and was expected to have around **85% battery capacity** remaining from its original specifications. However, after plugging it in to charge overnight, the battery discharged to **40%** instead of charging to 100%. Windows indicated the device was charging, and the charging LED illuminated, yet the battery continued to drain until hitting 40%, then charged back up to **50%** and remained flat at that level.

Multiple chargers were tested, including a separate Microsoft Surface charger, ruling out a faulty power supply. Dave generated a diagnostic battery health report that confirmed the capacity loss, though batteries should still indicate a full 100% charge regardless of degraded capacity.

### Power Button Malfunction

An additional fault involved the power button requiring a **10-second hold** for a cold boot every time, further indicating hardware problems. The device was returned due to these combined issues.

## Chris's Tesla Powerwall Home Energy System

Chris provides an update on his home's **Tesla Powerwall** system, which is now functioning as an appliance after resolving an initial setup issue.

### Powerwall Setup and Initial Loose Wire Fault

The system had been provisioned but was not operating properly after installation. The **Powerwall had charged to 100%** but was not discharging. The issue was traced to a loose **RS-485 wire** connecting the battery and inverter unit (located in the garage) to the controller box (located at the front of the house near the main electrical panel).

### Integrated Inverter and Separate Control Box

Dave initially assumed the Tesla Powerwall was a fully integrated single-box solution. In reality, while the charger, inverter, and batteries are integrated into the main unit, there is a separate **controller box** that manages switching between grid power and battery backup. This controller contains smart switches that determine when to back-feed power into the panel. Dave noted the impressive engineering quality of Tesla's hardware implementation.

### Powerwall Performance and Seasonal Impact

With the system operational, Chris now monitors energy generation through the Tesla app. Solar generation has been lower than anticipated, though this is partially attributed to seasonal factors—trees surrounding the property block sunlight during certain times of year. The system is expected to provide more value as utility power becomes more expensive and as autumn approaches and tree coverage decreases.

### Side Tangent: Veggie Pods and Solar Angle

The hosts briefly discussed **veggie pods** for home gardening, noting that recent tree trimming has improved sun exposure on their property, potentially making vegetable cultivation more viable.

## Discussion on Power Rates and Nuclear Energy

### Power Costs: US vs. Australia

Chris investigated electricity rates and found significant regional differences. His location in **North Carolina** benefits from approximately **70% nuclear power generation**, resulting in electricity costs of approximately **12.5 to 13 cents per kilowatt hour**. By comparison, Dave's electricity in **Australia** costs around **35 cents per kilowatt hour** (approximately **23-25 US cents**).

The highest US rates include:
- **Hawaii: 41 cents/kWh**
- **California: 38 cents/kWh**

### Nuclear Energy Policy

The conversation touched on nuclear energy bans in Australia at both federal and state levels. Dave noted that even with private funding, new nuclear plants cannot be constructed due to these prohibitions. They discussed Germany's decision to decommission their nuclear plants and the difficulty of restarting nuclear programs once shut down.

### Nuclear Waste Generation and Storage Solutions

Chris researched nuclear waste generation, discovering that plants produce approximately **50 to 77 metric tons of spent fuel per year per plant** (based on **20-30 metric tons per gigawatt annually**). While this exceeded their initial expectations, they noted that volumetrically this represents a relatively small amount—perhaps **10 barrels** per year per plant.

Storage solutions were also discussed. Contrary to popular perception perpetuated by media such as **The Simpsons**, spent fuel can be safely stored on-site in concrete containment structures without significant radiation exposure to nearby personnel. Groundwater contamination represents the primary environmental concern.

### North Carolina's Energy Generation Mix

Duke Energy's generation mix for North Carolina consists of:
- **Nuclear: 53%**
- **Natural gas: 33%**
- **Coal: 9%**
- **Hydro: 1.3%**
- **Solar: 2%**

The hosts expressed surprise at the high natural gas percentage, though this reflects broader trends in US energy production leveraging fracking and shale resources.

## Grid Stability, Duck Curve, and Battery Solutions

### Grid Challenges and the Duck Curve

A previous guest from the **Department of Energy (DOE)** explained the **duck curve** concept—energy usage patterns throughout the day—and the role of **peaker plants** in meeting demand spikes.

Chris observed that his battery system typically carries his household from noon (when solar generation exceeds consumption) through approximately **8 or 9 PM**, effectively bridging the duck curve dip. However, on sunny days when the battery reaches full capacity by **3 PM**, excess solar generation has nowhere to go and is exported back to the grid. This creates grid stability challenges when many solar-equipped households simultaneously dump excess power during peak production hours.

### Australia's $2 Billion Battery Scheme

Australia's government announced a **$2 billion battery scheme** providing batteries to consumers, including those without existing solar installations. This initiative addresses the country's status as having the **world's largest uptake of home solar** (approximately **50% of houses**), which has created excess generation capacity with insufficient storage. The scheme aims to remove households from the duck curve equation and provide distributed grid storage.

### Smart Solar Inverters and Remote Grid Control

Grid stability issues stem partly from the prevalence of "dumb" inverters in Australia's early solar adoption. **Smart solar inverters** capable of remote control by grid operators could solve excess generation problems by allowing operators to temporarily shut off solar feed-in when the grid is overloaded. This effectively moves the operating point down the IV curve—implementing **Minimum Power Point Tracking** rather than Maximum Power Point Tracking. New battery installations require inverters with future remote control capabilities.

## Dave's Home Battery Expansion Challenges

### Firmware and Gateway Issues

Dave's home battery system experienced issues with one of five battery modules switching off unexpectedly. After consulting with **Peter** (the battery designer, previously a podcast guest), the problem was attributed to early beta firmware requiring updates. Dave accidentally damaged two **Ethernet gateway devices** while attempting remote firmware updates, necessitating replacement with a **4G modem interface**.

The cells themselves remain healthy; the issue appears to be firmware-related, likely due to Dave being an early adopter of this battery model.

### Off-Grid Capability and Inverter Limitations

Peter recommended configuring the system to power the entire house from the inverter, switching to grid only when necessary. However, Dave's current **Deye inverter** is limited to **8 kilowatts maximum output**, insufficient to power all-electric appliances simultaneously (including EV charging). Dave plans to replace this problematic inverter when expanding the system.

### Resistive Water Heater and Powerwall Exclusion

Dave's home uses a **resistive electric water heater** rather than a heat pump, which represents an inefficiency given his battery system. Replacement with a heat pump water heater is planned for the future. His **20 kilowatt-hour battery** configuration provides current capacity needs.

### Garage Apartment on Separate Sub-Panel

Chris's garage apartment is on a **separately metered sub-panel** not backed up by the Tesla Powerwall. The Powerwall only connects to the main house sub-panel. This arrangement means EV charging and garage apartment usage are not supported during grid outages.

### Time-Sensitive Free Power Window

Dave's electricity provider offers **three hours of free power daily** (11 AM to 2 PM), a scheme enabled by Australia's massive solar uptake and excess generation capacity. The household has implemented timers to activate high-draw appliances during this window, including:
- EV charging
- Pool pump operation
- Heat pump operation
- Hot water system
- Dryer (as needed)

Batteries are also charged during this free period. This lifestyle adjustment is feasible because his partner works from home and can manage appliance scheduling. The hosts discussed how this model might eventually spread to US sunbelt states as solar adoption increases.

## Electronics Repair Stories

### Tennis Remote Keypad Repair (Silver Migration)

Dave repaired a **tennis court remote control** with a **membrane keypad** where four of five key rows had failed. Initial investigation suggested a standard flex cable break, but closer inspection revealed the cable used **silver conductive ink traces** rather than copper. The silver had migrated or tarnished across four traces—a failure mode Dave had not previously encountered to this extent. There was no evidence of water ingress or flexion stress at the failure point. The repair involved repainting the traces with **silver conductive paint**, restoring functionality.

### Chris's Test Point Design Flaw (Acupuncture)

Chris discussed learning a lesson about **test point placement** through painful experience. He placed two **1-millimeter test point pads** adjacent to each other without adequate spacing, creating difficulties for test jig construction using pogo pins. The resulting test fixture required "precision acupuncture" techniques to contact both pads simultaneously, involving angled drilling and creative 3D-printed solutions with hot glue. This experience reinforced the importance of properly sized, well-spaced test points on PCBs—a lesson repeatedly emphasized on the podcast but only truly learned through direct experience.

### Soldering Iron Tip Injury and JBC Tips

Dave injured himself by accidentally pressing his hand onto new **JBC soldering iron cartridges** stored in a holder. The **conical tips** are needle-sharp and penetrated his finger deeply enough that a cartridge remained embedded in his hand. The incident highlighted the extreme sharpness of fine soldering tips designed for **micro-fine work** on components as small as **01005 packages**.

Dave purchased a smaller JBC handle and fine tips for detailed work but opted for third-party eBay cartridges rather than genuine JBC tips given the limited expected usage. He expressed admiration for JBC's **nano soldering iron** designed for extremely small components.

### Expert Repair Channels (NorthridgeFix, Adam Savage's Tested)

The hosts acknowledged their limitations as generalists compared to dedicated repair technicians. They highlighted **NorthridgeFix** as an exemplary repair channel performing detailed comparisons of **solder flux**, **solder wick**, and other consumables. Professional repair technicians have dedicated tool setups, schematic access, and board view software enabling efficient work that occasional repairers cannot match.

Dave mentioned that **Adam Savage** (of MythBusters fame) reportedly learned soldering from one of his videos, highlighting the reach of educational content despite not being daily practitioners.

## Multimeter Reviews and Design Viability

### ANENG 626 Handheld Multimeter

Dave reviewed the **ANENG 626** multimeter, a device with an unusual form factor resembling a tape measure. The hosts debated whether the enclosure represented custom tooling or modified existing molds. Dave ordered the device out of curiosity despite recognizing its poor implementation, describing it as occupying an uncanny valley between novelty and functionality.

### Morbid Fascination: Wrist-Worn Multimeter

Dave also ordered a **wrist-worn multimeter** from AliExpress (approximately $10) with fixed leads, acknowledging it would be functionally terrible but driven by morbid fascination with the concept.

### Minimum Viable Build Number for Custom Multimeter Tooling

The discussion turned to manufacturing economics for niche electronic products. Dave shared insights from developing his **121GW multimeter** with Arcane, where initial estimates suggested **3,000-4,000 units** would make a custom multimeter viable. However, he suspected modern Chinese manufacturing capabilities might enable profitability at volumes as low as **500-1,000 units** through:
- Mold modification rather than custom tooling
- **Soft alloy molds** machined on five-axis machines rather than hardened steel
- Marketplace acquisition of cast-off molds with welded modifications

The hosts speculated that products like the ANENG 626 likely reuse or modify existing toolings (such as laser tape measure enclosures) rather than employing fully custom designs.

## Chris's Micro Timer Project

### Higher Resolution LCD and Processing Penalties

Chris is developing a low-power timer project using an **LCD display** from **Good Display** (note: company logo stylizes as "Goo Display"). While seeking a **Sharp memory LCD** alternative, he found a higher-resolution display (360x240) that offers more pixels but requires increased memory and **SPI bus data rates** to update. This creates a power consumption trade-off, as the original vision of a slow, low-power processor may be insufficient to drive the display efficiently.

### Processor Choice: ESP32 for Flexibility

The demo board shipped with an **ESP32**, leading Chris to consider incorporating **Wi-Fi and Bluetooth** capabilities despite the power penalty. Making the device hackable and extensible—beyond a simple fixed timer—could appeal to a broader market. Potential applications include:
- Network time display
- Data logging and transmission
- Gaming applications

The ESP32's programmability and ecosystem support (Arduino, MicroPython, ESP-IDF, Rust, Zephyr) make it attractive for an open, hackable device.

### Software Ecosystem: Arduino vs. ESP-IDF

Chris's demo board currently runs **Arduino** code. While Arduino offers accessibility for beginners, **ESPIDF** or other frameworks would provide better power optimization for a battery-powered device. However, releasing Arduino-based firmware allows users to fork and port to preferred platforms (Rust, bare metal, etc.) without limiting the hardware's potential applications.

### 18650 Battery and Power Optimization

The design incorporates an **18650 battery holder** directly on the PCB, enabling user-replaceable batteries rather than integrated pouch cells. Charging occurs via external **USB**. The battery fits neatly behind the angled display, matching the form factor requirements.

Power optimization strategies include using **interrupt-driven wake cycles** (as demonstrated by YouTuber **Kevin Darrah**), where the processor sleeps and wakes once per second to update the display before returning to sleep.

## Conclusion

The hosts concluded the episode, noting they had exceeded their scheduled time. Chris planned to continue work while Dave prepared for sleep, maintaining their opposite-side-of-the-planet schedule dynamic.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "This is the Amp Hour, released September 14th, 2025. Episode 702, Test Point Acupuncture. Welcome to the Amp Hour.",
      "section_title": "Podcast Introduction",
      "section_level": 1
    },
    {
      "index_sentences": "Dave shares his frustration with a recently purchased refurbished Microsoft Surface laptop that exhibited multiple faults requiring its return.",
      "section_title": "Dave's Refurbished Microsoft Surface Issues",
      "section_level": 1
    },
    {
      "index_sentences": "The laptop arrived with approximately 70% battery charge and was expected to have around 85% battery capacity remaining.",
      "section_title": "Battery Charging Fault",
      "section_level": 2
    },
    {
      "index_sentences": "An additional fault involved the power button requiring a 10-second hold for a cold boot every time.",
      "section_title": "Power Button Malfunction",
      "section_level": 2
    },
    {
      "index_sentences": "Chris provides an update on his home's Tesla Powerwall system, which is now functioning as an appliance.",
      "section_title": "Chris's Tesla Powerwall Home Energy System",
      "section_level": 1
    },
    {
      "index_sentences": "The system had been provisioned but was not operating properly after installation.",
      "section_title": "Powerwall Setup and Initial Loose Wire Fault",
      "section_level": 2
    },
    {
      "index_sentences": "Dave initially assumed the Tesla Powerwall was a fully integrated single-box solution.",
      "section_title": "Integrated Inverter and Separate Control Box",
      "section_level": 2
    },
    {
      "index_sentences": "With the system operational, Chris now monitors energy generation through the Tesla app.",
      "section_title": "Powerwall Performance and Seasonal Impact",
      "section_level": 2
    },
    {
      "index_sentences": "The hosts briefly discussed veggie pods for home gardening.",
      "section_title": "Side Tangent: Veggie Pods and Solar Angle",
      "section_level": 1
    },
    {
      "index_sentences": "Chris investigated electricity rates and found significant regional differences.",
      "section_title": "Discussion on Power Rates and Nuclear Energy",
      "section_level": 1
    },
    {
      "index_sentences": "His location in North Carolina benefits from approximately 70% nuclear power generation.",
      "section_title": "Power Costs: US vs. Australia",
      "section_level": 2
    },
    {
      "index_sentences": "Chris researched nuclear waste generation, discovering that plants produce approximately 50 to 77 metric tons of spent fuel per year per plant.",
      "section_title": "Nuclear Waste Generation and Storage Solutions",
      "section_level": 2
    },
    {
      "index_sentences": "Duke Energy's generation mix for North Carolina consists of nuclear, natural gas, coal, hydro, and solar.",
      "section_title": "North Carolina's Energy Generation Mix",
      "section_level": 2
    },
    {
      "index_sentences": "A previous guest from the Department of Energy explained the duck curve concept.",
      "section_title": "Grid Stability, Duck Curve, and Battery Solutions",
      "section_level": 1
    },
    {
      "index_sentences": "Australia's government announced a $2 billion battery scheme providing batteries to consumers.",
      "section_title": "Australia's $2 Billion Battery Scheme",
      "section_level": 2
    },
    {
      "index_sentences": "Grid stability issues stem partly from the prevalence of dumb inverters in Australia's early solar adoption.",
      "section_title": "Smart Solar Inverters and Remote Grid Control",
      "section_level": 2
    },
    {
      "index_sentences": "Dave's home battery system experienced issues with one of five battery modules switching off unexpectedly.",
      "section_title": "Dave's Home Battery Expansion Challenges",
      "section_level": 1
    },
    {
      "index_sentences": "Peter recommended configuring the system to power the entire house from the inverter.",
      "section_title": "Off-Grid Capability and Inverter Limitations",
      "section_level": 2
    },
    {
      "index_sentences": "Dave's home uses a resistive electric water heater rather than a heat pump.",
      "section_title": "Resistive Water Heater and Powerwall Exclusion",
      "section_level": 2
    },
    {
      "index_sentences": "Chris's garage apartment is on a separately metered sub-panel not backed up by the Tesla Powerwall.",
      "section_title": "Garage Apartment on Separate Sub-Panel",
      "section_level": 2
    },
    {
      "index_sentences": "Dave's electricity provider offers three hours of free power daily.",
      "section_title": "Time-Sensitive Free Power Window",
      "section_level": 2
    },
    {
      "index_sentences": "Dave repaired a tennis court remote control with a membrane keypad where four of five key rows had failed.",
      "section_title": "Tennis Remote Keypad Repair (Silver Migration)",
      "section_level": 2
    },
    {
      "index_sentences": "Chris discussed learning a lesson about test point placement through painful experience.",
      "section_title": "Chris's Test Point Design Flaw (Acupuncture)",
      "section_level": 2
    },
    {
      "index_sentences": "Dave injured himself by accidentally pressing his hand onto new JBC soldering iron cartridges stored in a holder.",
      "section_title": "Soldering Iron Tip Injury and JBC Tips",
      "section_level": 2
    },
    {
      "index_sentences": "The hosts acknowledged their limitations as generalists compared to dedicated repair technicians.",
      "section_title": "Expert Repair Channels (NorthridgeFix, Adam Savage's Tested)",
      "section_level": 2
    },
    {
      "index_sentences": "Dave reviewed the ANENG 626 multimeter, a device with an unusual form factor resembling a tape measure.",
      "section_title": "Multimeter Reviews and Design Viability",
      "section_level": 1
    },
    {
      "index_sentences": "Dave also ordered a wrist-worn multimeter from AliExpress with fixed leads.",
      "section_title": "Morbid Fascination: Wrist-Worn Multimeter",
      "section_level": 2
    },
    {
      "index_sentences": "The discussion turned to manufacturing economics for niche electronic products.",
      "section_title": "Minimum Viable Build Number for Custom Multimeter Tooling",
      "section_level": 2
    },
    {
      "index_sentences": "Chris is developing a low-power timer project using an LCD display from Good Display.",
      "section_title": "Chris's Micro Timer Project",
      "section_level": 1
    },
    {
      "index_sentences": "Chris found a higher-resolution display that offers more pixels but requires increased memory and SPI bus data rates.",
      "section_title": "Higher Resolution LCD and Processing Penalties",
      "section_level": 2
    },
    {
      "index_sentences": "The demo board shipped with an ESP32, leading Chris to consider incorporating Wi-Fi and Bluetooth capabilities.",
      "section_title": "Processor Choice: ESP32 for Flexibility",
      "section_level": 2
    },
    {
      "index_sentences": "Chris's demo board currently runs Arduino code.",
      "section_title": "Software Ecosystem: Arduino vs. ESP-IDF",
      "section_level": 2
    },
    {
      "index_sentences": "The design incorporates an 18650 battery holder directly on the PCB.",
      "section_title": "18650 Battery and Power Optimization",
      "section_level": 2
    },
    {
      "index_sentences": "The hosts concluded the episode, noting they had exceeded their scheduled time.",
      "section_title": "Conclusion",
      "section_level": 1
    }
  ]
};
window.faq = {"qas": [{"question": "What unusual fault did Dave experience with his refurbished Microsoft Surface laptop?", "answer": "His refurbished Microsoft Surface laptop had a battery fault where it would discharge overnight, then charge to only 50% and stay flat, despite showing it was charging. Additionally, the power button required a 10-second hold for a cold boot.", "index_of_source": "Dave shares his frustration with a recently purchased refurbished Microsoft Surface laptop that exhibited multiple faults requiring its return."}, {"question": "What surprising component of the Tesla Powerwall system did Dave Jones learn about, and how did it differ from his expectations?", "answer": "Dave was surprised to learn that the Tesla Powerwall system has a separate controller box located at the front of the house, which tells the breakers when to back-power into the grid, rather than being a fully integrated one-box solution as he initially thought.", "index_of_source": "Dave initially assumed the Tesla Powerwall was a fully integrated single-box solution."}, {"question": "Why is the Australian government implementing a $2 billion battery scheme for consumers without solar?", "answer": "The Australian government is implementing the $2 billion battery scheme because the country has a massive uptake of home solar (almost 50% of houses), leading to too much excess solar power with nowhere to store or use it on the grid.", "index_of_source": "Australia's government announced a $2 billion battery scheme providing batteries to consumers, including those without existing solar installations."}, {"question": "What was the hosts' surprising discovery regarding the amount of nuclear waste generated per plant annually, and how did it compare to their initial expectations?", "answer": "The hosts were surprised to learn that nuclear plants generate 50 to 77 metric tons of spent nuclear fuel per plant annually, which was more than they had initially thought, though volumetrically it might not be as much.", "index_of_source": "Chris researched nuclear waste generation, discovering that plants produce approximately 50 to 77 metric tons of spent fuel per year per plant."}, {"question": "How could smart solar inverters help alleviate the problem of too much solar power on the grid, as discussed by the hosts?", "answer": "Smart solar inverters could alleviate the problem of excess solar by being remotely controlled by grid operators, allowing them to be switched off when there's too much power being dumped onto the grid, thereby stabilizing it.", "index_of_source": "Grid stability issues stem partly from the prevalence of dumb inverters in Australia's early solar adoption."}, {"question": "What unusual problem did Dave Jones discover and fix in a tennis remote control's membrane keypad?", "answer": "Dave discovered that four out of five rows of keys on the tennis remote's membrane keypad didn't work because the silver conductive ink traces had migrated away or tarnished, rather than experiencing a typical copper trace break due to flexion or water ingress. He fixed it by repainting the traces with silver conductive paint.", "index_of_source": "Dave repaired a tennis court remote control with a membrane keypad where four of five key rows had failed."}, {"question": "Why is Chris Gamble considering using an ESP32 microcontroller with Wi-Fi and Bluetooth for his timer project, despite aiming for low power and minimal features?", "answer": "Chris is considering using an ESP32 with Wi-Fi and Bluetooth to make the timer project more flexible and hackable for a wider audience, allowing for future extensibility beyond just a fixed timer function, despite the potential for higher power consumption.", "index_of_source": "The demo board shipped with an ESP32, leading Chris to consider incorporating Wi-Fi and Bluetooth capabilities."}, {"question": "How does the host manage his household electricity consumption to benefit from his electricity provider's free power scheme?", "answer": "The host uses timers for high-draw appliances such as the EV charger, pool pump, heat pump, hot water system, and dryer to activate during the three-hour window of free power from 11 AM to 2 PM, also charging his batteries during this period.", "index_of_source": "Dave's electricity provider offers three hours of free power daily (11 AM to 2 PM)."}, {"question": "What prompted Dave Jones to express interest in the minimum viable build number for niche electronic products like the ANENG 626 multimeter?", "answer": "Dave was curious about the minimum viable build number because of the seemingly endless variety of multimeter designs being produced by companies like ANENG, wondering how many units they would need to sell to make the entire project viable, especially for custom tooling.", "index_of_source": "The discussion turned to manufacturing economics for niche electronic products."}]};
</script>
