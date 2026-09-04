# Life in Your 50s — Showcase v2

This version turns the site into a broader **technical showcase**, not just a prettier personal website.

## What changed in v2

- Integrated real photographs of the lab instead of relying only on diagrams and text.
- Reframed the Homelab page as a **complete technical environment**:
  - primary Ryzen workstation
  - Proxmox virtualization host
  - Dell G15 laptop
  - AZW MINI S test PC
  - Raspberry Pi 4
  - Linksys EA9500 personal router
  - ISP fiber ONT
  - 4-device dual-monitor 4K HDMI/USB3 KVM
  - IoT / MQTT experiments and planned Cisco lab expansion
- Corrected the Proxmox motherboard networking to **4 × 2.5 GbE Intel I226**.
- Added public-safe screenshots for Proxmox, TrueNAS, Grafana, Pi-hole, CollectorVision, the CSCI 434 digital-forensics lab, and the local LLM.
- Cropped or omitted screenshots that would expose internal addressing, usernames, or unnecessary private-network details.
- Avoided public screenshots of the download/indexing stack; the site describes media infrastructure only at a high level.
- Added real project imagery to the Projects page.
- Kept the unfinished A.A.S. Programming and Network Systems Management degrees off the public education section.
- Kept the site completely static. **PHP is still not needed.**

## Local preview

Double-click:

`PREVIEW-WEBSITE.bat`

or run:

```powershell
python -m http.server 8000
```

Then open:

`http://localhost:8000/`

## Azure Static Website deployment

Upload the **contents of this folder** to the Azure Storage `$web` container.

Recommended settings:

- Index document: `index.html`
- Error document: `404.html`

## Public-safety decisions

The showcase intentionally avoids publishing:

- private/internal IP addresses
- SSH usernames and credentials
- MAC addresses
- VPN endpoints
- detailed reverse-proxy destinations
- screenshots that could unnecessarily associate the public portfolio with download/indexing tools

## Still worth adding later

- Exact ISP ONT model if desired.
- Exact KVM manufacturer/model if available.
- Cisco switch/router model numbers once they are actually integrated into the lab.
- A custom domain and sitemap after the final domain is chosen.
- An Astro source version once the visual/content direction is finalized. Astro can generate the same static output while making future editing much easier.

## Architecture direction

The site remains intentionally static because the public showcase does not require server-side execution. The likely next technical step is **Astro**, not PHP: reusable components, Markdown content, data-driven lab inventory, and a static build that can still be hosted on Azure Storage.
