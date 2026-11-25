# AirLink v0.1 — engineering handoff
Status: experimental real WebRTC implementation; not yet validated on physical devices. No simulated connections.
## Scope
Two browsers on the same LAN/hotspot; manual offer/answer via offline file transfer; encrypted WebRTC voice and text; microphone muted except during PTT or explicit toggle; offline shell cached after first HTTPS visit. No STUN/TURN, cloud signaling, login, tracking, native Bluetooth, mesh, background mode, or emergency service.
## Acceptance tests (not run)
1. Load on two phones while online, wait for offline cache, then disable internet/cellular data, preserve local Wi-Fi, and reload both pages.
2. Pair using offer and answer files transferred without internet. Verify both browsers show connected. If blocked by local network isolation, try another LAN.
3. Hold PTT on A and confirm B hears actual speech; release and confirm silence. Reverse direction.
4. Test text both ways; deny microphone permission and check failure; test cancel, tab hide, disconnect and reconnect. Verify mic indicator stops on disconnect.
5. Test Android Chrome, iOS Safari, desktop Chrome; record actual results and browser limitations. No claim of compatibility until tested.
## Native next milestone
Android app using Nearby Connections, explicit verification of both endpoints, audio streaming, runtime permission handling and foreground lifecycle; test on two physical devices with cellular and internet disabled. Native APK not built here. Keep all changes on reviewed branches; Git history preserves prior code. Original README retained unchanged.
