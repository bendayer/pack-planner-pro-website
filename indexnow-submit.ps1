param(
  [string[]]$Urls
)

$hostName = "www.packplannerpro.co.uk"
$key = "73d7246734494764b0aab62f7f932004"
$keyLocation = "https://www.packplannerpro.co.uk/$key.txt"

if (-not $Urls -or $Urls.Count -eq 0) {
  $Urls = @(
    "https://www.packplannerpro.co.uk/",
    "https://www.packplannerpro.co.uk/contact",
    "https://www.packplannerpro.co.uk/dog-walking-software-uk",
    "https://www.packplannerpro.co.uk/dog-walking-software-no-monthly-fee",
    "https://www.packplannerpro.co.uk/dog-walking-software-for-sole-traders",
    "https://www.packplannerpro.co.uk/dog-walking-scheduling-software",
    "https://www.packplannerpro.co.uk/pet-care-software",
    "https://www.packplannerpro.co.uk/blog",
    "https://www.packplannerpro.co.uk/blog/how-to-organise-your-dog-walking-schedule",
    "https://www.packplannerpro.co.uk/blog/dog-walking-invoicing-how-to-invoice-clients-properly",
    "https://www.packplannerpro.co.uk/blog/moving-from-spreadsheets-to-proper-dog-walking-software"
  )
}

$payload = @{
  host = $hostName
  key = $key
  keyLocation = $keyLocation
  urlList = $Urls
} | ConvertTo-Json -Depth 4

Invoke-RestMethod `
  -Uri "https://api.indexnow.org/indexnow" `
  -Method Post `
  -ContentType "application/json; charset=utf-8" `
  -Body $payload

Write-Host "Submitted $($Urls.Count) URL(s) to IndexNow."
