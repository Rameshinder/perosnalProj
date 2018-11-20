<#
.SYNOPSIS
    This PowerShell script is used for packaging the IB-UI build artifacts for deployment.
.DESCRIPTION
		This PowerShell script is used by bamboo for packaging the IB-UI build artifacts and upload the packaged artifacts to artifactory.
.NOTES
    File Name  : PackageArtifacts.ps1
    Author	   : Sreejith Kolankara
    Email ID   : sreejith.kolankara@anz.com
    Version	   : 1.0
    Requires   : Powershell V 5.0
#>

	Param(
	[Parameter(Mandatory)]
	[string]$Version,
	[string]$bamboo_branch
	)


 #Identify the current directory path
 $Directorypath = Split-Path -Path $MyInvocation.MyCommand.Definition -Parent

  #This process will zip build folder to create artifacts ready to be uploaded to Artifactory and deploy
	Try
	{
        #Get the build folder for IB-UI for packaging
		$SourceDirectory  =  Resolve-Path ($Directorypath + '\..\build\')
        $ZipFileName="IB-UI-${Version}.zip"
        if (${bamboo_branch} -like "develop") {$ZipFileName="IB-UI-${Version}-rc.zip" }

        $ZipFileDestinationPath = $Directorypath + '\..\output\'

        if(Test-Path $SourceDirectory)
		{

            write-output "Zipping of $SourceDirectory is currently in progress"
            #Remove zip file is already exist in destination path
            If(Test-path $ZipFileDestinationPath) {Remove-item ($ZipFileDestinationPath + '*.zip')}
            #Check the destination path
            if(!(Test-Path -Path $ZipFileDestinationPath )){ New-Item -ItemType directory -Path $ZipFileDestinationPath}
            #zip the deployable artifact to the destination path
            Compress-Archive -Path $SourceDirectory\* -DestinationPath ($ZipFileDestinationPath + $ZipFileName) -Force
            Write-Output "Zipped and packaged successfully to $ZipFileDestinationPath"
        }
        else
        {
            #Build folder is unavailable
            write-output "Build folder not available"
            write-output "---------------------Packaging FAILED: ARTIFACT UNAVAILABLE-------------------------"
            Exit(1)
        }

	}
	Catch [Exception]
	{
        #Error Logging
        $ErrorMessage = $_.Exception.Message
        write-output "-------------------Error occured----------------"
        write-output "Error is due to" $ErrorMessage
		Exit(1)
	}