# HR Robots - Ads.txt Implementation Guide

## What is Ads.txt?

**Ads.txt** (Authorized Digital Sellers) is an IAB Tech Lab initiative that helps combat advertising fraud by allowing publishers to publicly declare which companies are authorized to sell their digital ad inventory.

---

## Why Ads.txt Matters

### Benefits:

1. **Prevents Ad Fraud**
   - Stops unauthorized sellers from selling your ad inventory
   - Reduces domain spoofing
   - Protects brand reputation

2. **Increases Ad Revenue**
   - Advertisers prefer sites with ads.txt
   - Higher CPM rates
   - Better ad quality

3. **Transparency**
   - Clear authorization of sellers
   - Builds advertiser trust
   - Industry standard compliance

4. **SEO & Trust**
   - Shows professionalism
   - Indicates legitimate business
   - Improves site credibility

---

## Current Implementation

### File Location:
```
https://www.hrrobots.click/ads.txt
```

### Current Status:
✅ **Ads.txt file created**
⚠️ **No active advertising** (placeholder entries)

### Current Content:
```
# ads.txt file for hrrobots.click
# HR Robots - AI Recruitment Software Platform
# This website does not currently sell advertising inventory

# Placeholder entry to indicate intentional ads.txt presence
placeholder.com, placeholder, DIRECT, placeholder
```

---

## When to Update Ads.txt

### Scenario 1: Not Using Advertising (Current)
**Status:** Keep placeholder file
**Action:** No changes needed
**Purpose:** Shows intentional presence, not oversight

### Scenario 2: Starting to Use Advertising
**Status:** Update with authorized sellers
**Action:** Add actual ad network entries
**Purpose:** Authorize legitimate ad sellers

### Scenario 3: Using Google AdSense
**Example Entry:**
```
google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0
```

### Scenario 4: Using Multiple Ad Networks
**Example Entries:**
```
google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0
openx.com, 537149888, RESELLER, 6a698e2ec38604c6
appnexus.com, 3153, RESELLER, f5ab79cb980f11d1
```

---

## Ads.txt Format

### Structure:
```
<DOMAIN>, <PUBLISHER_ID>, <RELATIONSHIP>, <CERTIFICATION_AUTHORITY_ID>
```

### Fields Explained:

1. **Domain** (Required)
   - Ad system domain name
   - Example: `google.com`, `openx.com`

2. **Publisher ID** (Required)
   - Your account ID with the ad system
   - Example: `pub-1234567890123456`

3. **Relationship** (Required)
   - `DIRECT` - Direct business relationship
   - `RESELLER` - Indirect relationship through intermediary

4. **Certification Authority ID** (Optional)
   - Unique identifier for ad system
   - Example: `f08c47fec0942fa0` (Google)

### Example Entries:

```
# Google AdSense (Direct)
google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0

# Google Ad Manager (Direct)
google.com, 1234567890, DIRECT, f08c47fec0942fa0

# OpenX (Reseller)
openx.com, 537149888, RESELLER, 6a698e2ec38604c6

# AppNexus (Reseller)
appnexus.com, 3153, RESELLER, f5ab79cb980f11d1

# Rubicon Project (Reseller)
rubiconproject.com, 16414, RESELLER, 0bfd66d529a55807

# Index Exchange (Reseller)
indexexchange.com, 183965, RESELLER, 50b1c356f2c5c8fc
```

---

## How to Add Advertising Networks

### Step 1: Sign Up with Ad Network
- Google AdSense
- Google Ad Manager
- Media.net
- PropellerAds
- etc.

### Step 2: Get Your Publisher ID
- Found in ad network dashboard
- Usually starts with `pub-` for Google
- Numeric for most others

### Step 3: Get Certification Authority ID
- Provided by ad network
- Check their documentation
- Or use IAB's ads.txt validator

### Step 4: Update ads.txt
```
# Remove placeholder entry
# Add actual entries

google.com, pub-YOUR-ID-HERE, DIRECT, f08c47fec0942fa0
```

### Step 5: Verify
- Upload to root directory
- Test: `https://www.hrrobots.click/ads.txt`
- Use validator: https://adstxt.guru/

---

## Common Ad Networks

### Google AdSense
```
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```
**Get ID:** https://www.google.com/adsense/

### Google Ad Manager
```
google.com, XXXXXXXXXX, DIRECT, f08c47fec0942fa0
```
**Get ID:** https://admanager.google.com/

### Media.net
```
media.net, XXXXXXXX, DIRECT
```
**Get ID:** https://www.media.net/

### Amazon Publisher Services
```
aps.amazon.com, XXXX-XXXX-XXXX, DIRECT
```
**Get ID:** https://aps.amazon.com/

### Taboola
```
taboola.com, XXXXXXXXX, DIRECT, c228e6794e811952
```
**Get ID:** https://www.taboola.com/

### Outbrain
```
outbrain.com, XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX, DIRECT
```
**Get ID:** https://www.outbrain.com/

---

## Ads.txt Best Practices

### ✅ Do:

1. **Place in Root Directory**
   - Must be at: `https://domain.com/ads.txt`
   - Not in subdirectories

2. **Use Plain Text**
   - No HTML formatting
   - UTF-8 encoding
   - Unix line endings (LF)

3. **Keep Updated**
   - Add new networks immediately
   - Remove old networks
   - Update quarterly

4. **Include Comments**
   - Use `#` for comments
   - Document changes
   - Add contact info

5. **Verify Regularly**
   - Test file accessibility
   - Validate format
   - Check for errors

6. **One Entry Per Line**
   - Each seller on separate line
   - No blank lines between entries
   - Clear formatting

### ❌ Don't:

1. **Don't Use HTML**
   - Plain text only
   - No `<html>` tags

2. **Don't Add Unauthorized Sellers**
   - Only add networks you use
   - Verify IDs are correct

3. **Don't Forget Subdomains**
   - Each subdomain needs own ads.txt
   - Or use redirect

4. **Don't Use Wrong Format**
   - Follow exact format
   - Case-sensitive domains

5. **Don't Leave Outdated Entries**
   - Remove unused networks
   - Keep file current

---

## Validation & Testing

### Online Validators:

1. **Ads.txt Guru**
   - URL: https://adstxt.guru/
   - Comprehensive validation
   - Error detection

2. **Google Ads.txt Validator**
   - URL: https://adstxt.adnxs.com/
   - Google-specific checks
   - AdSense validation

3. **IAB Ads.txt Validator**
   - URL: https://iabtechlab.com/ads-txt/
   - Official validator
   - Standards compliance

### Manual Testing:

```bash
# Check file exists
curl https://www.hrrobots.click/ads.txt

# Check HTTP status
curl -I https://www.hrrobots.click/ads.txt

# Should return: HTTP/2 200
```

### Common Errors:

1. **404 Not Found**
   - File not in root directory
   - Incorrect filename
   - Server configuration issue

2. **Wrong Content-Type**
   - Should be: `text/plain`
   - Check server MIME types

3. **Format Errors**
   - Missing commas
   - Extra spaces
   - Wrong field order

4. **Invalid IDs**
   - Incorrect publisher ID
   - Wrong certification ID
   - Typos in domain

---

## For HR Robots Specifically

### Current Recommendation:

**Keep placeholder ads.txt** because:
- ✅ Shows intentional presence
- ✅ Prevents 404 errors
- ✅ Indicates no unauthorized sellers
- ✅ Professional appearance
- ✅ Ready for future monetization

### If Adding Advertising:

**Recommended Networks for B2B SaaS:**

1. **Google AdSense**
   - Best for content sites
   - Easy integration
   - Reliable payments

2. **LinkedIn Ads** (if applicable)
   - B2B focused
   - Professional audience
   - Higher quality leads

3. **Carbon Ads**
   - Developer-focused
   - Non-intrusive
   - Good for tech sites

4. **BuySellAds**
   - Direct ad sales
   - Premium advertisers
   - Full control

### Update Process:

1. Sign up with ad network
2. Get publisher ID
3. Update ads.txt:
```
# Remove placeholder
# Add actual entries
google.com, pub-YOUR-ID, DIRECT, f08c47fec0942fa0
```
4. Verify with validator
5. Monitor ad performance

---

## Subdomain Handling

### Option 1: Separate Files
```
https://www.hrrobots.click/ads.txt
https://blog.hrrobots.click/ads.txt
https://app.hrrobots.click/ads.txt
```

### Option 2: Redirect to Main
```apache
# In subdomain .htaccess
RewriteRule ^ads\.txt$ https://www.hrrobots.click/ads.txt [R=301,L]
```

### Option 3: Subdomain Declaration
```
# In main ads.txt
subdomain=blog.hrrobots.click
subdomain=app.hrrobots.click
```

---

## App-ads.txt (Mobile Apps)

If you have mobile apps:

### File Location:
```
https://www.hrrobots.click/app-ads.txt
```

### Format:
Same as ads.txt but for mobile app inventory

### Example:
```
google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0
```

---

## Monitoring & Maintenance

### Monthly Tasks:
- [ ] Verify file accessibility
- [ ] Check for crawl errors in Search Console
- [ ] Validate format
- [ ] Review active networks

### Quarterly Tasks:
- [ ] Audit all entries
- [ ] Remove unused networks
- [ ] Add new networks
- [ ] Update documentation

### Annual Tasks:
- [ ] Complete review
- [ ] Optimize ad strategy
- [ ] Benchmark against industry
- [ ] Update contact information

---

## Integration with .htaccess

### Ensure Proper MIME Type:

```apache
# In .htaccess
<Files "ads.txt">
    ForceType text/plain
    Header set Content-Type "text/plain; charset=utf-8"
</Files>
```

### Allow Crawling:

```apache
# Don't block ads.txt in robots.txt
# Ensure it's accessible
```

---

## Resources

### Official Documentation:
- [IAB Tech Lab - Ads.txt](https://iabtechlab.com/ads-txt/)
- [IAB Ads.txt Specification](https://iabtechlab.com/wp-content/uploads/2017/09/IABOpenRTB_Ads.txt_Public_Spec_V1-0-1.pdf)

### Validators:
- [Ads.txt Guru](https://adstxt.guru/)
- [Google Ads.txt Validator](https://adstxt.adnxs.com/)

### Ad Networks:
- [Google AdSense](https://www.google.com/adsense/)
- [Google Ad Manager](https://admanager.google.com/)
- [Media.net](https://www.media.net/)

### Tools:
- [Ads.txt Generator](https://www.adstxtgenerator.com/)
- [Ads.txt Manager](https://www.adstxtmanager.com/)

---

## Summary

✅ **Ads.txt Created** - File present at root
✅ **Placeholder Entries** - Indicates intentional presence
✅ **Ready for Monetization** - Easy to update when needed
✅ **Professional Appearance** - Shows attention to detail
✅ **Fraud Prevention** - Protects against unauthorized sellers

**Current Status:** Ads.txt file created with placeholder entries. Update with actual ad network information when implementing advertising.

**Next Steps:**
1. Keep current placeholder if not using ads
2. Update with real entries when monetizing
3. Validate after any changes
4. Monitor regularly

Your website now has a proper ads.txt file! 📄✅
