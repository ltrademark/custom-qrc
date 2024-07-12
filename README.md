# Custom QR generator

### Usage

`https://zoomph-qrc.glitch.me/qrcode?data=[url|text]`

Sample

![sample](https://zoomph-qrc.glitch.me/qrcode?data=https://zoomph.com)

### Specific Usage: 2fa

Use the URL schema below and replace the content inside `[ ]` and append it at the end of the qrcode?data= url above.

`otpauth://totp/[App Name]:[Email]?secret=[Base32 Hash]&issuer=[Issuer]`

### Related Links

- Secure your own application with 2fa
- Key URI format
- oAuth URI String Format

