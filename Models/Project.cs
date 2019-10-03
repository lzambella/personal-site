using System;
using System.Collections.Generic;

namespace resume_app.Models {
    /*
    Model for a singular project
     */
    public class Project {
        
        public int ID {get; set;}
        
        public string Title {get; set;}
        public string ShortDesc {get; set;}
        public string LongDesc {get; set;}
        public string Technologies {get; set;}
        public DateTime StartDate {get; set;}
        public bool Completed {get; set;}
        public string GithubLink {get; set;}

    }
}