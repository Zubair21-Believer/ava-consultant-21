// =============================================================================
// AV REPOSITORY  -  PRIMARY SOURCE OF TRUTH
// =============================================================================
// This file is the distilled, structured knowledge extracted from the proven
// AV Bill-of-Materials designs in the project repository (auditoriums,
// boardrooms, meeting rooms, training rooms, client / innovation spaces, etc.).
//
// It is injected into every request to Claude so that recommendations are
// REPOSITORY-DRIVEN (proven makes/models and architectures) rather than
// generic. To add or correct a design, simply edit the text below and redeploy.
// =============================================================================

const REPOSITORY = `
# AV REPOSITORY — PROVEN REFERENCE DESIGNS & EQUIPMENT STANDARDS

These are real, deployed enterprise AV designs. Treat the makes/models below as the
APPROVED STANDARD. Prefer them over alternatives. Only deviate (consultant judgement)
when room size, ceiling, platform, budget or a special use case genuinely requires it,
and explain why.

## EQUIPMENT STANDARDS (preferred makes/models by category)

DISPLAYS (flat panel, 4K, 500 nits, commercial 16/7 or 24/7):
- 43": Samsung QM43 or LG 43UH5Q
- 55": Samsung QM55 or LG 55UH5Q / 55UM5N
- 65": Samsung QM65 or LG 65UH5Q / 65UM5N
- 75": Samsung QM75
- 86": LG 86UH5J-H
- 98": Samsung QM98 or LG 98UH5
- 110": LG 110UM5K
- Table-top status display 13": Samsung QB13R
- Interactive: LG TR3DK series (65/75/86/98/105")
- Mounts: OEM fixed wall mount, or Logic / AVSI custom wall / trolley / floor mounts

LED VIDEO WALLS (Active LED, fine pixel pitch):
- AOTO CVES 1.8 (1.8mm) for large walls (e.g. 250", 325"); AOTO CVES 2.5 (2.5mm) for very large
- AOTO 1.2PP IMD panels (1.2mm) for premium boardroom LED (e.g. 162")
- AOTO SID706SF (150", 1.7mm) / SID703SD (120", 1.3mm) for training-room LED
- Mounts: SI / Logic custom brackets, wall or floor stand with wheels

VIDEO CONFERENCING — PLATFORM-LED appliances:
- Microsoft Teams / Zoom small-mid rooms: Cisco Room Bar (huddle/small), Cisco Room Bar Pro (medium), with Cisco Navigator touch panel
- Cisco large rooms: Cisco Room Kit EQ + Quad Camera + Codec EQ, Cisco Room Navigator
- Poly ecosystem small-mid: Poly Studio X30 + TC8/TC10 (small), Poly Studio X50 + TC8 (medium), Poly Studio X52 (larger)
- Poly / BYOM large & integrated rooms: Poly G7500 codec + TC8/TC10 touch panel (the workhorse integrated codec), with E70 speaker-track camera for big rooms
- Cameras (PTZ, integrated DSP rooms): QSC NC-12x80 (wide FOV / audience), QSC NC-20x60 (tele / presenter); Newtek NDI PTZ (PTZ3-UHD / NDIHX-PTZ3) for production rooms
- BYOM bridge: QSC I/O USB Bridge, or Inogeni 4K2USB3
- BYOD docking: HP Thunderbolt 4 USB-C 100W G6 dock + Belkin USB-C cable

AUDIO — MICROPHONES:
- Ceiling array (premium VC): Shure MXA920 (round or square) with A900-CM mount; or platform-native (Cisco Ceiling Mic Pro, Poly IP Ceiling Mic Array)
- Gooseneck (boardroom): Shure MX418D/C or Sennheiser MZH 3042 + ME 36 with MAT 133-S base
- Wireless (training/events): Shure ULXD series (ULXD2/SM58 handheld, ULXD1 bodypack, WL185 lavalier, MX153 earset, ULXD4Q quad receiver) with UA844+SWB antenna distribution, UA864 antennas, UA834WB amplifier, SB900B batteries
- Catch-throw mic: Catchbox

AUDIO — DSP (Q-SYS preferred ecosystem):
- Small/huddle: QSC Core Nano
- Small-mid rooms: QSC Core 8 Flex (8 I/O, 8 AEC) — most common workhorse
- Mid-large conference / training: QSC Core 110f (24 I/O, 16 AEC, 1RU) with SLQSE-110-P scripting + SLDAN Dante license
- Large / auditorium: QSC Core 510i (8 card slots, 256x256) with SLQSE-510-P, CDN64 Dante bridge, QIO peripherals
- Production / mixing console rooms: Allen & Heath SQ-6 with M-SQ-DANT64 Dante card
- Biamp ecosystem (client/innovation spaces): Biamp Tesira SERVER-IO with DAN-1 Dante, SEC-4 mic in, SOC-4 out, EX-USB, TesiraCONNECT; Biamp TesiraFORTÉ for smaller

AUDIO — LOUDSPEAKERS & AMPLIFIERS (Bose preferred):
- Ceiling: Bose DM8C / DM6PE / DM5C pendant
- Line array (front-of-room): Bose MA12 + WMB-MA12 wall mount
- Surface/wall: Bose DM5SE / DM6SE / DM8S
- Auditorium FOH: Bose ArenaMatch AM10/100, AM20/100, AM40/100 with AMM module plate; subs Bose SMS118; amps Bose PSX 4804D / 2404D
- Amps (general): Bose P4300A (4-ch), PowerSpace P2600A, PS604D Dante amp, PM8500N network amp
- Portable powered: Bose F1 Model 812 + F1 subwoofer

SWITCHING / DISTRIBUTION:
- Direct / small rooms: HDMI cable, faceplate with HDMI+USB (Modular-FP-H&U), floor box
- Point-to-point extension: Liberty AV DL-HDE100-H2 (100m), DL-HD70LS-H2 (70m), DL-HDM88A-H2 (8x8 matrix); Crestron DM Lite HD-TXC/RXC-4KZ-101
- AV-over-IP (training/large/distributed): Liberty AV IPEX-5001 (encoder) / IPEX-5002 (decoder) + IPEXAR-5000 controller (JPEG2000); OR Crestron DM-NVX-363 / NVX-384 / NVX-351C with DM-NVX-DIR2 director
- Video wall / multiview: Datapath VSN1172, MTC VW 4x4 windowing processor
- Production: Newtek TriCaster (2 Elite / TC Mini 4K), Blackmagic / Ross switchers for broadcast-grade

CONTROL:
- Crestron: CP4N processor, TS-1070 / TSW-1070 touch panel, 4-Series
- Extron: IPCP Pro 255Q xi processor, TLP Pro 725 / TouchLink panels, IPL EXP I/O
- QSC native: TSC-70-G3 / TSC-80W-G2 PoE touch controllers (when Q-SYS is the DSP)
- iPad control: Apple iPad + iPort Connect Pro docking station

NETWORK (Netgear AV-line preferred):
- Small: Netgear GSM4212P (8-port PoE+), GSM4230P (24-port)
- Mid/large: Netgear GSM4248PX / GSM4248UX (40-port PoE++), GSM4230PX (24-port)
- Fiber backbone / AV-over-IP core: Netgear XSM4396K0, AXM761 SFP+, AXC76xx DAC
- Wi-Fi: Netgear WAX610 AP
- Always include onsite support pack (PMB0333/PMB0334) on AV switches

CABLES & CONSUMABLES (always include):
- HDMI: Kramer C-HM/HM-6 (1.8m), C-HM/HM-25 (10m), or Crestron CBL-8K-HD certified 8K
- USB: Kramer/Startech USB extension; active optical for long runs
- Cat6: Siemon STP/UTP (in metres)
- Audio/Speaker: Kramer/Belden in metres
- Lockable LAN patch: MX MX3652A
- "Connectors, Consumables, Cable dressing, Lacing bars, ties, velcro, accessories to mount AV equipment as per global AV standards" — always 1 line item per room (Generic)

ALWAYS INCLUDE per project:
- Custom AV equipment rack (with PDU APC AP7921B where rack present)
- Installation & Commissioning charges (SI / AVSI — Services)

## STANDARD ROOM TEMPLATES (proven designs — start here, then adjust)

### 4 PAX HUDDLE  (~ small)
Display: 43" 4K (Samsung QM43 / LG 43UH5Q) + OEM/Logic mount.
VC: Cisco Room Bar + Navigator (Teams/Webex) OR Poly Studio X30 + TC8/TC10.
BYOD: HP Thunderbolt dock + Belkin USB-C; faceplate HDMI/USB.
Cables & consumables kit. (All-in-one bar = integrated audio + camera, no separate DSP.)

### 6 PAX MEETING  (~ small)
Display: 55" 4K (QM55 / 55UH5Q) + mount/trolley.
VC: Cisco Room Bar + Navigator OR Poly Studio X30 + TC8. BYOD dock. Cables kit.

### 8 PAX MEETING
Display: 65" 4K. VC: Poly Studio X50 + TC8 (or Cisco Room Bar Pro). BYOD dock, 10m USB. Cables kit.

### 10 PAX MEETING
Display: 75" 4K (or 65" + Cisco/Poly ceiling mic). VC: Cisco Room Bar Pro + Navigator OR Poly Studio X50 + TC8. BYOD dock. Cables kit.

### 12 PAX MEETING
Display: 75" 4K. VC: Poly Studio X50 + TC8 (all-in-one). BYOD dock, 10m USB. Cables kit.

### 18–20 PAX CONFERENCE / BOARDROOM  (integrated)
Display: 98" 4K (QM98 / 98UH5) + custom wall mount, OR dual display.
VC: Poly G7500 + TC8 codec; camera QSC NC-20x60 (PTZ) [+ NC-12x80 for wide] or Poly E70; ceiling mic Shure MXA920 (or Poly IP Ceiling Mic Array / Cisco Ceiling Mic Pro x2-3).
DSP: QSC Core 110f + SLQSE-110-P scripting (+ QIO-GP8x8 for logic).
Audio: Bose DM8C ceiling + Bose MA12 line array (front), Bose P4300A amp.
Switching: faceplate HDMI/USB, Liberty AV extenders / 8x8 matrix as needed.
Control: Extron IPCP Pro 255Q xi + iPad, or QSC TSC-70-G3 (Q-SYS native).
Network: Netgear GSM4230P (24-port) + WAX610 AP. Rack + cables + I&C.

### 28 PAX BOARDROOM  (premium LED)
Display: 162" 1.2mm Active LED (AOTO 1.2PP IMD) + custom mount; 13" table status displays (Samsung QB13R) per seat.
VC: Poly G7500 + TC8; cameras QSC NC-20x60 x4 (ledge mounts).
Switching: Datapath VSN1172 video-wall controller; Liberty AV DL-HDE100-H2 extenders.
Audio: Sennheiser gooseneck (MZH 3042 + ME 36 / MAT 133-S) per seat; DSP QSC Core 110F + Core 8 Flex; Bose MA-12 line array + DM6SE surface; Bose PM4500N amp.
Control: QSC TSC-80W-G2 PoE touch + iPad/iPort; Q-SYS UCI + scripting + Dante licences; Kramer FC-7P GPIO gateway.
Network: Netgear GSM4248PX 48-port. Acoustic rack partition. Cables + I&C.

### TRAINING ROOM — SINGLE / DUAL / TRIPLE / QUAD  (scalable)
Display: 98"–110" signage (LG 98UH5 / 110UM5K) on aesthetic floor mount (Logic PODS), OR Active LED (AOTO 150"/120"); plus secondary 55"/65" displays.
VC: Poly G7500 + TC10; dual PTZ cameras QSC NC-12x80 (presenter) + NC-20x60 (audience) with ceiling mounts; QSC I/O-USB Bridge.
Audio: Shure ULXD wireless kit (handheld + bodypack + lavalier + earset, ULXD4Q receivers, UA844 antenna distro); DSP QSC Core 110f (single/larger) or Core 8 Flex (per pod); Bose MA12 line array + DM8C ceiling; Bose P4300A + PS604D Dante amp.
Switching: AV-over-IP — Liberty AV IPEX-5001/5002 + IPEXAR-5000 controller (JPEG2000), OR Crestron DM-NVX-363; patch panels for display/Dante/USB.
Control: Extron IPCP Pro 255Q xi + Networked touch (QSC TSC-70-G3) + custom bracket.
Network: Netgear GSM4248PX core + GSM4212PX edge + onsite support packs; fiber SFP+ for multi-room.
Quantities scale x1/x2/x3/x4 for single/dual/triple/quad. Rack + cables + I&C per room.

### AUDITORIUM  (flagship)
Display: 325" + 250" 1.8mm Active LED walls (AOTO CVES 1.8) + custom mounts; 98" stage displays (Samsung QM98); 34" control-room monitors (Dell U3423WE); green-room 32" (Samsung QM32).
VC: Poly G7500 / Cisco Codec Pro + touch; Newtek NDI PTZ cameras x7 (PTZ3-UHD) + Canon XA75 camcorder on Manfrotto; TelyCam TLC-50TC controller.
Production: Newtek TriCaster 2 Elite + ProTek + 2-Stripe control panel; Spark Plus I/O converters; Blackmagic HDMI-SDI.
Audio: Allen & Heath SQ-6 console + DX168 stagebox + Dante; QSC Core 510i + Dante bridge + QIO; Bose ArenaMatch AM10/20/40 FOH line array + SMS118 subs + PSX amps; stage monitors + front fill; Shure wireless (ULXD + UL) + antenna distro.
Stage lighting: Martin MAC Aura XB, ERA 300/400, ELP profiles; Obsidian NX2 + RDM; ENTTEC DIN nodes.
Control: Crestron CP4N + TS-1070 + iPad. Custom racks, large cable/connector counts, I&C. (Leksa LED studio fixtures + Ross/AJA broadcast gear available for green-screen/production variants.)

### CLIENT EXPERIENCE / INNOVATION CENTER  (premium, interactive)
Display: interactive LG TR3DK (75"/86"/98"/105"), 65" displays, projector for overflow; LED for innovation entry (AOTO).
VC: Poly G62/X70 + TC10; cameras QSC NC-12x80 x3 (presenter + audience); QSC Core Nano OR Biamp Tesira SERVER-IO (DAN-1, SEC-4, SOC-4, EX-USB, TesiraCONNECT).
Switching: Crestron DM-NVX (363/384) + DM-NVX-DIR2 director; wall plates, floor boxes, USB-over-IP (DM-NUX / Extron USB Extender).
Audio: Shure SL/ULXD wireless + MXA920 ceiling array; Bose pendant DM5P/DM6PE + MA12 + P4300A amps; BGM via Biamp media player.
Experiential: Proto M life-size hologram, movable kiosks (Aero Oscivue 27").
Control: Crestron CP4N + iPad/iPort + Crestron Go app; Netgear GSM4248UX + WAX610.

## SUPPORTED OPTION SETS (the consultant chooses among these)
Room types: Boardroom, Meeting Room, Large Conference Room, Training Room, Town Hall, Auditorium, Innovation Space, Client Experience Center, Multipurpose Room, Operations Center, Executive Briefing Center, Command Center.
Platforms: Microsoft Teams, Cisco Webex, Zoom, Google Meet, BYOM, Hybrid.
Displays: Single, Dual, LED Wall, Projection, Interactive.
Audio: Integrated, Table Mics, Ceiling Mics, Hybrid, Wireless Mics, Antenna Distribution.
Cameras: Room Bar, PTZ, Dual PTZ, Cross View, SpeakerTrack, Seervision, Document Camera.
Switching: Direct Connect, Crestron NVX, Extron NAV, Q-SYS VisionSuite, Fiber Backbone, Cat6 Tx&Rx.
DSP: QSC Core Nano, Core 8 Flex, Core 110f, Core 510i, Biamp TesiraFORTÉ, Biamp Server IO, Bose DSP.
Ceilings: Open, Gypsum, Acoustic, Grided Tile, Exposed Services.
Budgets: Entry Level, Standard Enterprise, Premium Enterprise, Executive, Innovation/Flagship.
`;

module.exports = { REPOSITORY };
