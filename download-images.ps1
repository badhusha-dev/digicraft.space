# PowerShell script to download images for DigiCraft.space
# Run this script from the project root directory

Write-Host "🖼️  Downloading images for DigiCraft.space..." -ForegroundColor Green

# Create directories if they don't exist
$directories = @(
    "client/public/images/hero",
    "client/public/images/team", 
    "client/public/images/workspace",
    "client/public/images/people",
    "client/public/images/ui"
)

foreach ($dir in $directories) {
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force
        Write-Host "✅ Created directory: $dir" -ForegroundColor Yellow
    }
}

# Image URLs and their local paths
$images = @{
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" = "client/public/images/hero/team-collaboration.jpg"
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" = "client/public/images/team/team-collaboration.jpg"
    "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" = "client/public/images/workspace/mission-workspace.jpg"
    "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" = "client/public/images/workspace/development-approach.jpg"
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" = "client/public/images/people/founder-ayaz.jpg"
}

# Download each image
foreach ($url in $images.Keys) {
    $localPath = $images[$url]
    $fileName = Split-Path $localPath -Leaf
    
    Write-Host "📥 Downloading: $fileName" -ForegroundColor Cyan
    
    try {
        # Download the image
        Invoke-WebRequest -Uri $url -OutFile $localPath -UseBasicParsing
        
        # Get file size
        $fileSize = (Get-Item $localPath).Length
        $fileSizeKB = [math]::Round($fileSize / 1KB, 2)
        
        Write-Host "✅ Downloaded: $fileName ($fileSizeKB KB)" -ForegroundColor Green
    }
    catch {
        Write-Host "❌ Failed to download: $fileName" -ForegroundColor Red
        Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`n🎉 Image download completed!" -ForegroundColor Green
Write-Host "📁 Images saved to: client/public/images/" -ForegroundColor Yellow
Write-Host "🔗 You can now update your components to use local images" -ForegroundColor Yellow
