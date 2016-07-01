using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI.WebControls;
using System.IO;
using System.Net;
namespace defacebook.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        facebook.Service2Client obj = new facebook.Service2Client();
        public ActionResult Index()
        {
            
            //ViewBag.text = obj.validateuser("test@test.com", "1234");

            return View("login");
        }
      
        [HttpPost]
        public ActionResult Login(FormCollection fc )
        {
            string name = fc["txtemail"];
            string password = fc["password"];
            //string login = "test";
            
              //ViewBag.text = result;
              return View("sucess");
         
           
        }
        public ActionResult error(string message)
        {
            string name = Request.QueryString["message"];
            string photo = Request.QueryString["photo"];
            ViewBag.name = name;
            ViewBag.photo = photo;
           
            return View();
        }
        public ActionResult sucess()
        {
            string name = Request.QueryString["message"];
            string photo = Request.QueryString["photo"];
            ViewBag.name = name;
            ViewBag.photo = photo;

            return View("home");
        }
        public ActionResult Register(FormCollection fc)
        {
            string fname = fc["txtfname"];
            string lname = fc["txtlname"];
            string username = fc["txtusername"];
            string reusername = fc["txtreusername"];
            string password = fc["txtpassword"];
            string month = fc["month"];
            string day = fc["day"];
            string year = fc["year"];
            var datestring = year + "-" + month + "-" + day;
            DateTime date = DateTime.Parse(datestring);
            string.Format("{0:yyyy-mm-dd}", date);
           // string dob =day+month+year;

            string gender = fc["rdogender"];

            //var fileName = Path.GetFileName(file.FileName);
            //var path = Path.Combine(Server.MapPath("~/images"), fileName);
            //file.SaveAs(path);
            if (username == reusername)
            {

                string a = obj.InsertIntoRegister(fname, lname, username, password, gender, datestring);
                if (a == "1")
                {
                    ViewBag.message = "Registration Sucessfull";
                    return View("sucess");
                }
                else
                {
                    ViewBag.msg = a;
                    return View("login");
                }

            }
            else
            {
                ViewBag.same = "username mis mach";
                return View("login");
            }

            

        }





        public string file { get; set; }
    }
}
