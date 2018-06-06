#!/bin/bash
# Script to download latest files from dev CDN's backing storage

$usFolder = "../public/en-US"
$spanishFolder = "../public/es-mx"
$chineseFolder = "../public/zh-chs"
$sourceBlob = "captivate"
$destination = "../public/"
$connectionString = "DefaultEndpointsProtocol=https;AccountName=qtassetscdndev;AccountKey=HWAUPyB3DXD6mMPaBqiIKAO454ugTDNXgxiEKm6uCAb7HdkE4ICAFkKQed0Cje11skW6BXHPBKiOwqr6rJ9z7w==;EndpointSuffix=core.windows.net"

if (Get-Module -ListAvailable -Name Azure) {
    Write-Host "Azure CLI installed -- proceeding..."
}
else {
    Write-Host "Azure CLI not installed -- installing now..."
    Install-Module Azure
}

Write-Host "Clearing directories..."
Remove-Item -r $usFolder; mkdir $usFolder
Remove-Item -r $spanishFolder; mkdir $spanishFolder
Remove-Item -r $chineseFolder; mkdir $chineseFolder

Write-Host "Downloading latest from blob storage..."

az storage blob download-batch --source $sourceBlob --destination $destination --connection-string $connectionString

Write-Host "Done!"
