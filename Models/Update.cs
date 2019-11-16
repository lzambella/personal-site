using System;
namespace resume_app.Models {
    /**
    Model for a newsfeed update on the home page
     */

     public class Update {

         public int ID {get; set;}
         /** Date the update was implemented */
         public DateTime date {get; set;}
         /** Details of the update */
         public String details {get; set;}
     }
}