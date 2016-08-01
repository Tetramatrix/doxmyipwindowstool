using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;
using SetProxy;
using System.Runtime.InteropServices;
using System.Diagnostics;

namespace IP2Location_Lite_IP_Browser
{
    static class Program
    {
        [System.Runtime.InteropServices.DllImport("kernel32.dll", CharSet = System.Runtime.InteropServices.CharSet.Unicode, SetLastError = true)]
        [return: System.Runtime.InteropServices.MarshalAs(System.Runtime.InteropServices.UnmanagedType.Bool)]
        static extern bool SetDllDirectory(string lpPathName);

        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            int wsize = IntPtr.Size;
            string libdir = (wsize == 4) ? "x86" : "x64";
            string appPath = System.IO.Path.GetDirectoryName(Application.ExecutablePath);
            SetDllDirectory(System.IO.Path.Combine(appPath, libdir));

            //WinInetInterop.SetConnectionProxy("localhost:1101");
            //Process.Start(appPath+"\\php7\\php.exe -S localhost:1972 -t "+appPath);

            //http://stackoverflow.com/questions/9679375/run-an-exe-from-c-sharp-code
            // Use ProcessStartInfo class
            ProcessStartInfo startInfo = new ProcessStartInfo();
            startInfo.CreateNoWindow = false;
            //startInfo.UseShellExecute = false;
            startInfo.FileName = appPath+"\\php7\\php.exe";
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

                Process exeProcess = Process.Start(startInfo);

            }
            catch
            {
                // Log error.
            }

            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Form1());
        }
    }
}
