import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../sharedServices/services/user.service';

@Component ({
  selector: 'pricing-section',
  templateUrl: `pricing.component.html`,
  styleUrls:['pricing.component.scss']
})
export class PricingSection implements OnInit {
  addonVisibility: boolean;
  pricingInfo = {
    "_id":"5e09ba0b197068a98b6a73b7",
    "productname":"Digit Market API Manager",
    "productdescription":"dmapim",
    "pricingparameters":[
        {
          "value":"Base Cost",
          "options":[
              {
                "range":"low",
                "value":0
              },
              {
                "range":"high",
                "value":602
              }
          ],
          "tip":"Base cost tip",
          "userInput":false,
          "mandatory":"required"
        },
        {
          "value":"Number of a API calls a day",
          "options":[
              {
                "range":"low",
                "value":"upto 4 million",
                "cost":920
              },
              {
                "range":"mid",
                "value":"4 to 8 million",
                "cost":920
              },
              {
                "range":"mid",
                "value":"8 to 17 million",
                "cost":1065
              },
              {
                "range":"mid",
                "value":"17 to 60 million",
                "cost":4095
              },
              {
                "range":"high",
                "value":"> 60 million",
                "cost":"na"
              }
          ],
          "tip":"Number of a API calls a day tip",
          "userInput":true,
          "mandatory":"required"
        },
        {
          "value":"Average request/response payload size in KB",
          "options":[
              {
                "value":"ui"
              }
          ],
          "tip":"Average request/response payload size in KB tip",
          "userInput":true,
          "mandatory":"required"
        },
        {
          "value":"Data Out",
          "options":[
              {
                "range":"low",
                "value":"upto 4 million",
                "cost":2.29
              },
              {
                "range":"mid",
                "value":"4  to 8 million",
                "cost":2.29
              },
              {
                "range":"mid",
                "value":"8 to 17 million",
                "cost":4.87
              },
              {
                "range":"mid",
                "value":"17 to 60 million",
                "cost":17.17
              }
          ],
          "tip":"Data out tip",
          "userInput":false,
          "mandatory":"required"
        },
        {
          "value":"Analytics data retention period in months (minimum 1 month)",
          "options":[
              {
                "value":"ui"
              }
          ],
          "tip":"Analytics data retention period in months (minimum 1 month) tip",
          "userInput":true,
          "mandatory":"required"
        },
        {
          "value":"Storage",
          "options":[
              {
                "range":"low",
                "value":"upto 4 million",
                "cost":25.3
              },
              {
                "range":"mid",
                "value":"4  to 8 million",
                "cost":50.38
              },
              {
                "range":"mid",
                "value":"8 to 17 million",
                "cost":107.14
              },
              {
                "range":"mid",
                "value":"17 to 60 million",
                "cost":377.74
              }
          ],
          "tip":"Storage tip",
          "userInput":false,
          "mandatory":"required"
        },
        {
          "value":"Dedicated Performance testing environment required",
          "options":[
              {
                "value":"addon",
                "range":"mid",
                "action":"Yes",
                "group":"addon"
              },
              {
                "value": "none",
                "range":"mid",
                "action":"No",
                "group":"none"
              }
          ],
          "tip": "Dedicated Performance testing environment required tip",
          "userInput": true,
          "mandatory": "required"
        },
        {
          "value":"Level of support",
          "options":[
              {
                "range":"na",
                "value":"8 Hours 5 Days",
                "cost":666
              },
              {
                "range":"na",
                "value":"8 Hours 7 Days",
                "cost":1332
              },
              {
                "range":"na",
                "value":"24 Hours 7 Days",
                "cost":1998
              }
          ],
          "tip":"Level of support tip",
          "userInput":true,
          "mandatory":"required"
        },
        {
          "type":"Management Overheads",
          "value":10,
          "userInput":false,
          "mandatory":"required"
        },
        {
          "type":"Dev & Test Env Charges",
          "value":105,
          "userInput":false,
          "mandatory":"required"
        },
        {
          "type":"Subscription Management",
          "value":5.9,
          "mathadd":0.95,
          "userInput":false,
          "mandatory":"required"
        },
        {
          "type":"Percentile",
          "highValue":20,
          "lowValue":0,
          "userInput":false,
          "mandatory":"required"
        }
    ],
    "addOns":[
        {
          "value":"AWS Support Cost",
          "options":[
              {
                "range":"low",
                "value":"upto 4 million",
                "cost":100
              },
              {
                "range":"mid",
                "value":"4  to 8 million",
                "cost":100
              },
              {
                "range":"mid",
                "value":"8 to 17 million",
                "cost":200
              },
              {
                "range":"mid",
                "value":"17 to 60 million",
                "cost":410
              }
          ],
          "tip":"AWS Support Cost tip",
          "userInput":false,
          "mandatory":"required"
        },
        {
          "value":"Number of days perf env is required for",
          "options":[
              {
                "value":"ui"
              }
          ],
          "tip":"Number of days perf env is required for tip",
          "userInput":true,
          "mandatory":"required"
        }
    ],
    "support":{
        "email":"product@thbs.com"
    },
    "prodImg":"https://deplomatic-ui.s3.amazonaws.com/assets/logo/dmapim.png"
  }
  
  userData: any;
  constructor (private http: HttpClient, private userService: UserService) {
    //
  }

  ngOnInit() {
    this.addonVisibility = false;
    this.userService.getUserData ().subscribe ((data: any) => console.log (data));
  }

  modifyOptions (event: boolean) {
    this.addonVisibility = event;
  }
}