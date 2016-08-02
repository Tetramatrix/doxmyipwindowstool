using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using CefSharp;
using CefSharp.WinForms;
using System.Diagnostics;

namespace IP2Location_Lite_IP_Browser
{
    public partial class Form1 : Form
    {
        public ChromiumWebBrowser chromeBrowser;
        public Process exeProcess;

        public Form1()
        {
            InitializeComponent();

            string appPath = System.IO.Path.GetDirectoryName(Application.ExecutablePath);
            //Process.Start(appPath+"\\php7\\php.exe -S localhost:1972 -t "+appPath);

            //http://stackoverflow.com/questions/9679375/run-an-exe-from-c-sharp-code
            // Use ProcessStartInfo class
            ProcessStartInfo startInfo = new ProcessStartInfo();
            startInfo.CreateNoWindow = false;
            //startInfo.UseShellExecute = false;
            startInfo.FileName = appPath + "\\php7\\php.exe";
            startInfo.WindowStyle = ProcessWindowStyle.Hidden;
            startInfo.Arguments = "-S localhost:1972 -t \"" + appPath + "\\webroot\"";

            try
            {
                // Start the process with the info we specified.
                // Call WaitForExit and then the using statement will close.
                //using (Process exeProcess = Process.Start(startInfo))
                //{
                //   exeProcess.WaitForExit();
                //}

                exeProcess = Process.Start(startInfo);

            }
            catch
            {
                // Log error.
            }

            CefSettings settings = new CefSettings();
            // Initialize cef with the provided settings
            Cef.Initialize(settings);
            // Create a browser component
            chromeBrowser = new ChromiumWebBrowser("http://localhost:1972/main.html");

            chromeBrowser.BringToFront();
            //fill it to the form window.
            chromeBrowser.Dock = DockStyle.Fill;
            // Add it to the form
            //this.Controls.Add(chromeBrowser);

            toolStripContainer1.ContentPanel.Controls.Add(chromeBrowser);

            //toolStripContainer1.ContentPanel.Controls.Add(web_view);

        }


        private void Form1_FormClosed(object sender, FormClosedEventArgs e)
        {
            Cef.Shutdown();
            exeProcess.Kill();
        }
    }
  }