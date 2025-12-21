# 🚀 Medical Ailydian Deployment Guide

## ✅ Deployment Tamamlandı!

**Production URL:** https://medical-ailydian-60c84m2pl-emrahsardag-yandexcoms-projects.vercel.app

---

## 📋 Sonraki Adımlar

### 1. Custom Domain Ekleme (medical.ailydian.com)

#### Vercel Dashboard'da:
1. Şu linke gidin: https://vercel.com/emrahsardag-yandexcoms-projects/medical-ailydian/settings/domains
2. **"Add"** butonuna tıklayın
3. Domain alanına **"medical.ailydian.com"** yazın
4. **"Add"** butonuna tıklayın

#### DNS Sağlayıcınızda (Cloudflare/GoDaddy/etc):
Aşağıdaki CNAME kaydını ekleyin:

```
Type: CNAME
Name: medical
Value: cname.vercel-dns.com
TTL: 3600 (veya Auto)
```

**NOT:** DNS propagation 5-10 dakika sürebilir.

---

### 2. Ana Projede Redirect Ayarlama

Ana projenizde (www.ailydian.com) `/medical-expert` route'unu yeni subdomain'e redirect edin.

#### Seçenek A: Vercel.json ile (Önerilen)

Ana projenizin `vercel.json` dosyasına ekleyin:

```json
{
  "redirects": [
    {
      "source": "/medical-expert",
      "destination": "https://medical.ailydian.com",
      "permanent": true
    },
    {
      "source": "/medical-expert/:path*",
      "destination": "https://medical.ailydian.com/:path*",
      "permanent": true
    }
  ]
}
```

#### Seçenek B: Next.js Config ile

`next.config.js` dosyasına ekleyin:

```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: '/medical-expert',
        destination: 'https://medical.ailydian.com',
        permanent: true,
      },
      {
        source: '/medical-expert/:path*',
        destination: 'https://medical.ailydian.com/:path*',
        permanent: true,
      },
    ]
  },
}
```

#### Seçenek C: Server.js ile (Express)

```javascript
// Ana projenizin server.js dosyasına ekleyin:
app.get('/medical-expert*', (req, res) => {
  const path = req.path.replace('/medical-expert', '')
  res.redirect(301, `https://medical.ailydian.com${path}`)
})
```

---

### 3. Environment Variables (Production)

Vercel Dashboard'da environment variables ekleyin:

1. https://vercel.com/emrahsardag-yandexcoms-projects/medical-ailydian/settings/environment-variables
2. Aşağıdaki değişkenleri ekleyin:

```
BACKEND_API_URL=https://www.ailydian.com
MEDICAL_API_TOKEN=your-production-token
OPENAI_API_KEY=your-openai-key
ANTHROPIC_API_KEY=your-anthropic-key
GOOGLE_API_KEY=your-google-key
GROQ_API_KEY=your-groq-key
NEXT_PUBLIC_SITE_URL=https://medical.ailydian.com
```

**NOT:** Her environment variable ekledikten sonra **Redeploy** yapın.

---

### 4. SSL/TLS Certificate

Vercel otomatik olarak Let's Encrypt SSL sertifikası sağlar.

Domain eklendikten sonra:
- ✅ HTTPS otomatik aktif olur
- ✅ HTTP → HTTPS redirect otomatik
- ✅ Certificate auto-renewal

---

### 5. Test Etme

Domain DNS propagation tamamlandıktan sonra:

```bash
# 1. Ana domain testi
curl -I https://medical.ailydian.com

# 2. Redirect testi
curl -I https://www.ailydian.com/medical-expert

# 3. API testi
curl https://medical.ailydian.com/api/medical/chat \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"message":"test"}'
```

Beklenen sonuçlar:
- ✅ `medical.ailydian.com` → 200 OK
- ✅ `www.ailydian.com/medical-expert` → 301 Redirect
- ✅ API endpoints çalışıyor

---

## 🔧 Troubleshooting

### Domain doğrulanmıyor?
1. DNS kayıtlarını kontrol edin: `dig medical.ailydian.com`
2. 5-10 dakika bekleyin (DNS propagation)
3. Cloudflare kullanıyorsanız "Proxy status" → OFF yapın

### API çalışmıyor?
1. Environment variables eklenmiş mi kontrol edin
2. Backend API (www.ailydian.com) erişilebilir mi test edin
3. Vercel logs kontrol edin: `vercel logs`

### Build hatası?
```bash
# Local test
npm run build

# Hata varsa düzeltin ve tekrar deploy
git add .
git commit -m "Fix: build error"
vercel --prod
```

---

## 📊 Monitoring

### Vercel Analytics
https://vercel.com/emrahsardag-yandexcoms-projects/medical-ailydian/analytics

### Logs
```bash
# Real-time logs
vercel logs --follow

# Production logs
vercel logs medical-ailydian-60c84m2pl-emrahsardag-yandexcoms-projects.vercel.app
```

---

## 🔒 Security Checklist

- ✅ HTTPS enforced
- ✅ Security headers configured (vercel.json)
- ✅ HIPAA-compliant architecture
- ✅ Model name obfuscation
- ✅ Environment variables secured
- ✅ CORS properly configured
- ✅ PHI masking implemented

---

## 🚀 Post-Deployment

1. ✅ Custom domain eklendi mi?
2. ✅ DNS kayıtları doğru mu?
3. ✅ SSL/TLS çalışıyor mu?
4. ✅ Redirect ayarlandı mı?
5. ✅ Environment variables production'da mı?
6. ✅ API endpoints test edildi mi?
7. ✅ Monitoring aktif mi?

---

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Project Issues: GitHub Issues

---

**Son Güncelleme:** 21 Aralık 2025
**Deploy Tarihi:** 21 Aralık 2025
**Status:** ✅ Live on Production
