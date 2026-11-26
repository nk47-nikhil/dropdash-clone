// Dropdash Shipment Page Logic - 100 Rich Orders for Pickups
document.addEventListener("DOMContentLoaded", () => {
  // 1. Orders Dataset (100 Orders in Pickups, 165 Total)
  const ORDERS_DATA = [
  {
    "id": 1002,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7862270361661",
    "orderId": "1002",
    "subOrderId": "1002-1",
    "price": "\u20b9 878.00",
    "awbNo": "7862270361661",
    "payment": "COD",
    "customerName": "Arpit Yadav",
    "phone": "7455044124",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1001,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7856340631613",
    "orderId": "1001",
    "subOrderId": "1001-1",
    "price": "\u20b9 878.00",
    "awbNo": "7856340631613",
    "payment": "COD",
    "customerName": "NISHNATBONT Talwind...",
    "phone": "8954100292",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1003,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7862181241943",
    "orderId": "1003",
    "subOrderId": "1003-1",
    "price": "\u20b9 949.00",
    "awbNo": "7862181241943",
    "payment": "COD",
    "customerName": "Suresh Yadav",
    "phone": "9184935163",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1004,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7867831113321",
    "orderId": "1004",
    "subOrderId": "1004-1",
    "price": "\u20b9 878.00",
    "awbNo": "7867831113321",
    "payment": "COD",
    "customerName": "Vikram Trivedi",
    "phone": "6373399426",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1005,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7869703905715",
    "orderId": "1005",
    "subOrderId": "1005-1",
    "price": "\u20b9 849.00",
    "awbNo": "7869703905715",
    "payment": "COD",
    "customerName": "Rohan Gupta",
    "phone": "6999270936",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1006,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7864733616459",
    "orderId": "1006",
    "subOrderId": "1006-1",
    "price": "\u20b9 849.00",
    "awbNo": "7864733616459",
    "payment": "COD",
    "customerName": "Naveen Rathore",
    "phone": "6946785248",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1007,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7861667779376",
    "orderId": "1007",
    "subOrderId": "1007-1",
    "price": "\u20b9 799.00",
    "awbNo": "7861667779376",
    "payment": "COD",
    "customerName": "Aditya Chauhan",
    "phone": "7193448329",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1008,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7869776552803",
    "orderId": "1008",
    "subOrderId": "1008-1",
    "price": "\u20b9 999.00",
    "awbNo": "7869776552803",
    "payment": "COD",
    "customerName": "Rohan Pandey",
    "phone": "6415393687",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1009,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7867665963761",
    "orderId": "1009",
    "subOrderId": "1009-1",
    "price": "\u20b9 599.00",
    "awbNo": "7867665963761",
    "payment": "COD",
    "customerName": "Suresh Pandey",
    "phone": "6338444264",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1010,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7863840104345",
    "orderId": "1010",
    "subOrderId": "1010-1",
    "price": "\u20b9 799.00",
    "awbNo": "7863840104345",
    "payment": "COD",
    "customerName": "Sneha Verma",
    "phone": "6196814233",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1011,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7866488854841",
    "orderId": "1011",
    "subOrderId": "1011-1",
    "price": "\u20b9 949.00",
    "awbNo": "7866488854841",
    "payment": "COD",
    "customerName": "Kavita Sharma",
    "phone": "7632629719",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1012,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7868173347748",
    "orderId": "1012",
    "subOrderId": "1012-1",
    "price": "\u20b9 599.00",
    "awbNo": "7868173347748",
    "payment": "COD",
    "customerName": "Harsh Mishra",
    "phone": "6899825838",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1013,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7862051454923",
    "orderId": "1013",
    "subOrderId": "1013-1",
    "price": "\u20b9 878.00",
    "awbNo": "7862051454923",
    "payment": "COD",
    "customerName": "Pooja Trivedi",
    "phone": "9131575764",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1014,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7868235363119",
    "orderId": "1014",
    "subOrderId": "1014-1",
    "price": "\u20b9 1,199.00",
    "awbNo": "7868235363119",
    "payment": "COD",
    "customerName": "Divya Trivedi",
    "phone": "6943239974",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1015,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7862149938334",
    "orderId": "1015",
    "subOrderId": "1015-1",
    "price": "\u20b9 599.00",
    "awbNo": "7862149938334",
    "payment": "COD",
    "customerName": "Pradeep Chauhan",
    "phone": "7722989659",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1016,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7867439149233",
    "orderId": "1016",
    "subOrderId": "1016-1",
    "price": "\u20b9 949.00",
    "awbNo": "7867439149233",
    "payment": "COD",
    "customerName": "Gaurav Gupta",
    "phone": "8815087637",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1017,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7867609857128",
    "orderId": "1017",
    "subOrderId": "1017-1",
    "price": "\u20b9 599.00",
    "awbNo": "7867609857128",
    "payment": "COD",
    "customerName": "Neha Singh",
    "phone": "7059257080",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1018,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7863119634399",
    "orderId": "1018",
    "subOrderId": "1018-1",
    "price": "\u20b9 799.00",
    "awbNo": "7863119634399",
    "payment": "COD",
    "customerName": "Abhishek Mishra",
    "phone": "6941975480",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1019,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7868217611860",
    "orderId": "1019",
    "subOrderId": "1019-1",
    "price": "\u20b9 878.00",
    "awbNo": "7868217611860",
    "payment": "COD",
    "customerName": "Deepak Kumar",
    "phone": "9401954956",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1020,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7867567496105",
    "orderId": "1020",
    "subOrderId": "1020-1",
    "price": "\u20b9 1,499.00",
    "awbNo": "7867567496105",
    "payment": "COD",
    "customerName": "Sachin Bhatia",
    "phone": "8010258946",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1021,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7868047877267",
    "orderId": "1021",
    "subOrderId": "1021-1",
    "price": "\u20b9 699.00",
    "awbNo": "7868047877267",
    "payment": "COD",
    "customerName": "Suresh Trivedi",
    "phone": "9224995600",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1022,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7868385972235",
    "orderId": "1022",
    "subOrderId": "1022-1",
    "price": "\u20b9 999.00",
    "awbNo": "7868385972235",
    "payment": "COD",
    "customerName": "Aditya Kumar",
    "phone": "7948728483",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1023,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7863615507143",
    "orderId": "1023",
    "subOrderId": "1023-1",
    "price": "\u20b9 1,249.00",
    "awbNo": "7863615507143",
    "payment": "COD",
    "customerName": "Vikram Mehta",
    "phone": "9614942327",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1024,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7864944899549",
    "orderId": "1024",
    "subOrderId": "1024-1",
    "price": "\u20b9 878.00",
    "awbNo": "7864944899549",
    "payment": "COD",
    "customerName": "Pooja Trivedi",
    "phone": "9344175247",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1025,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7868760038701",
    "orderId": "1025",
    "subOrderId": "1025-1",
    "price": "\u20b9 878.00",
    "awbNo": "7868760038701",
    "payment": "COD",
    "customerName": "Nishant Sharma",
    "phone": "9990448177",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1026,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7869957813353",
    "orderId": "1026",
    "subOrderId": "1026-1",
    "price": "\u20b9 799.00",
    "awbNo": "7869957813353",
    "payment": "COD",
    "customerName": "Ritu Shukla",
    "phone": "6338258951",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1027,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7868128575500",
    "orderId": "1027",
    "subOrderId": "1027-1",
    "price": "\u20b9 699.00",
    "awbNo": "7868128575500",
    "payment": "COD",
    "customerName": "Naveen Singh",
    "phone": "6551437149",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1028,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7865141907136",
    "orderId": "1028",
    "subOrderId": "1028-1",
    "price": "\u20b9 849.00",
    "awbNo": "7865141907136",
    "payment": "COD",
    "customerName": "Yash Bhatia",
    "phone": "7817363615",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1029,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7868086172302",
    "orderId": "1029",
    "subOrderId": "1029-1",
    "price": "\u20b9 999.00",
    "awbNo": "7868086172302",
    "payment": "COD",
    "customerName": "Simran Pandey",
    "phone": "8884873529",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1030,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7861965067727",
    "orderId": "1030",
    "subOrderId": "1030-1",
    "price": "\u20b9 878.00",
    "awbNo": "7861965067727",
    "payment": "COD",
    "customerName": "Sumit Sharma",
    "phone": "7064746525",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1031,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7863527331058",
    "orderId": "1031",
    "subOrderId": "1031-1",
    "price": "\u20b9 799.00",
    "awbNo": "7863527331058",
    "payment": "COD",
    "customerName": "Sanjay Trivedi",
    "phone": "6988335251",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1032,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7864888749350",
    "orderId": "1032",
    "subOrderId": "1032-1",
    "price": "\u20b9 799.00",
    "awbNo": "7864888749350",
    "payment": "COD",
    "customerName": "Rahul Patel",
    "phone": "6289482182",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1033,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7868168204967",
    "orderId": "1033",
    "subOrderId": "1033-1",
    "price": "\u20b9 999.00",
    "awbNo": "7868168204967",
    "payment": "COD",
    "customerName": "Vishal Patel",
    "phone": "7196050747",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1034,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7863030106617",
    "orderId": "1034",
    "subOrderId": "1034-1",
    "price": "\u20b9 1,099.00",
    "awbNo": "7863030106617",
    "payment": "COD",
    "customerName": "Manish Shukla",
    "phone": "8474810179",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1035,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7867146318035",
    "orderId": "1035",
    "subOrderId": "1035-1",
    "price": "\u20b9 878.00",
    "awbNo": "7867146318035",
    "payment": "COD",
    "customerName": "Vikas Gupta",
    "phone": "6405126228",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1036,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7863775320897",
    "orderId": "1036",
    "subOrderId": "1036-1",
    "price": "\u20b9 878.00",
    "awbNo": "7863775320897",
    "payment": "COD",
    "customerName": "Mayank Talwind",
    "phone": "8892078691",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1037,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7861822873088",
    "orderId": "1037",
    "subOrderId": "1037-1",
    "price": "\u20b9 949.00",
    "awbNo": "7861822873088",
    "payment": "COD",
    "customerName": "Amit Sharma",
    "phone": "7067970820",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1038,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7862986972437",
    "orderId": "1038",
    "subOrderId": "1038-1",
    "price": "\u20b9 878.00",
    "awbNo": "7862986972437",
    "payment": "COD",
    "customerName": "Aditya Kumar",
    "phone": "7196342297",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1039,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7862015242176",
    "orderId": "1039",
    "subOrderId": "1039-1",
    "price": "\u20b9 878.00",
    "awbNo": "7862015242176",
    "payment": "COD",
    "customerName": "Mohit Sharma",
    "phone": "6217275224",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1040,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7861251837136",
    "orderId": "1040",
    "subOrderId": "1040-1",
    "price": "\u20b9 878.00",
    "awbNo": "7861251837136",
    "payment": "COD",
    "customerName": "Tarun Gupta",
    "phone": "9713645169",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1041,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7867249213370",
    "orderId": "1041",
    "subOrderId": "1041-1",
    "price": "\u20b9 849.00",
    "awbNo": "7867249213370",
    "payment": "COD",
    "customerName": "Sachin Joshi",
    "phone": "9979364815",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1042,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7866110572428",
    "orderId": "1042",
    "subOrderId": "1042-1",
    "price": "\u20b9 878.00",
    "awbNo": "7866110572428",
    "payment": "COD",
    "customerName": "Mohit Bansal",
    "phone": "6664847319",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1043,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7868507497883",
    "orderId": "1043",
    "subOrderId": "1043-1",
    "price": "\u20b9 878.00",
    "awbNo": "7868507497883",
    "payment": "COD",
    "customerName": "Sanjay Trivedi",
    "phone": "6261810763",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1044,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7863281169403",
    "orderId": "1044",
    "subOrderId": "1044-1",
    "price": "\u20b9 999.00",
    "awbNo": "7863281169403",
    "payment": "COD",
    "customerName": "Sanjay Bansal",
    "phone": "8159725924",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1045,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7863555656321",
    "orderId": "1045",
    "subOrderId": "1045-1",
    "price": "\u20b9 878.00",
    "awbNo": "7863555656321",
    "payment": "COD",
    "customerName": "Rohan Kumar",
    "phone": "6294296873",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1046,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7869760623742",
    "orderId": "1046",
    "subOrderId": "1046-1",
    "price": "\u20b9 878.00",
    "awbNo": "7869760623742",
    "payment": "COD",
    "customerName": "Suresh Shukla",
    "phone": "7057486868",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1047,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7862119980130",
    "orderId": "1047",
    "subOrderId": "1047-1",
    "price": "\u20b9 1,199.00",
    "awbNo": "7862119980130",
    "payment": "COD",
    "customerName": "Sanjay Shukla",
    "phone": "8245334677",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1048,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7866583444930",
    "orderId": "1048",
    "subOrderId": "1048-1",
    "price": "\u20b9 1,099.00",
    "awbNo": "7866583444930",
    "payment": "COD",
    "customerName": "Neha Pandey",
    "phone": "6562117925",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1049,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7861429416213",
    "orderId": "1049",
    "subOrderId": "1049-1",
    "price": "\u20b9 999.00",
    "awbNo": "7861429416213",
    "payment": "COD",
    "customerName": "Aman Yadav",
    "phone": "7968321319",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1050,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7864783282817",
    "orderId": "1050",
    "subOrderId": "1050-1",
    "price": "\u20b9 1,249.00",
    "awbNo": "7864783282817",
    "payment": "COD",
    "customerName": "Neha Singh",
    "phone": "7498981529",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1051,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7868316648259",
    "orderId": "1051",
    "subOrderId": "1051-1",
    "price": "\u20b9 1,499.00",
    "awbNo": "7868316648259",
    "payment": "COD",
    "customerName": "Swati Kumar",
    "phone": "7881988384",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1052,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7864771526597",
    "orderId": "1052",
    "subOrderId": "1052-1",
    "price": "\u20b9 799.00",
    "awbNo": "7864771526597",
    "payment": "COD",
    "customerName": "Mohit Mehta",
    "phone": "8849232839",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1053,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7866464693977",
    "orderId": "1053",
    "subOrderId": "1053-1",
    "price": "\u20b9 849.00",
    "awbNo": "7866464693977",
    "payment": "COD",
    "customerName": "Vikram Trivedi",
    "phone": "6667643690",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1054,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7867393195616",
    "orderId": "1054",
    "subOrderId": "1054-1",
    "price": "\u20b9 799.00",
    "awbNo": "7867393195616",
    "payment": "COD",
    "customerName": "Amit Gupta",
    "phone": "8952777682",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1055,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7865310195918",
    "orderId": "1055",
    "subOrderId": "1055-1",
    "price": "\u20b9 1,499.00",
    "awbNo": "7865310195918",
    "payment": "COD",
    "customerName": "Aditya Joshi",
    "phone": "6189351213",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1056,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7868325785916",
    "orderId": "1056",
    "subOrderId": "1056-1",
    "price": "\u20b9 799.00",
    "awbNo": "7868325785916",
    "payment": "COD",
    "customerName": "Neha Kumar",
    "phone": "9183562527",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1057,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7863373077218",
    "orderId": "1057",
    "subOrderId": "1057-1",
    "price": "\u20b9 949.00",
    "awbNo": "7863373077218",
    "payment": "COD",
    "customerName": "Aman Singh",
    "phone": "8343292475",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1058,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7864696689457",
    "orderId": "1058",
    "subOrderId": "1058-1",
    "price": "\u20b9 1,199.00",
    "awbNo": "7864696689457",
    "payment": "COD",
    "customerName": "Pradeep Mehta",
    "phone": "7566166314",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1059,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7864993808565",
    "orderId": "1059",
    "subOrderId": "1059-1",
    "price": "\u20b9 1,099.00",
    "awbNo": "7864993808565",
    "payment": "COD",
    "customerName": "Ritu Sharma",
    "phone": "7519038154",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1060,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7869265609985",
    "orderId": "1060",
    "subOrderId": "1060-1",
    "price": "\u20b9 1,099.00",
    "awbNo": "7869265609985",
    "payment": "COD",
    "customerName": "Ananya Rathore",
    "phone": "6106456634",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1061,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7865759234471",
    "orderId": "1061",
    "subOrderId": "1061-1",
    "price": "\u20b9 878.00",
    "awbNo": "7865759234471",
    "payment": "COD",
    "customerName": "Ritu Joshi",
    "phone": "6683749521",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1062,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7869239688178",
    "orderId": "1062",
    "subOrderId": "1062-1",
    "price": "\u20b9 699.00",
    "awbNo": "7869239688178",
    "payment": "COD",
    "customerName": "Kavita Gupta",
    "phone": "9507212752",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1063,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7863834820954",
    "orderId": "1063",
    "subOrderId": "1063-1",
    "price": "\u20b9 1,249.00",
    "awbNo": "7863834820954",
    "payment": "COD",
    "customerName": "Kavita Patel",
    "phone": "6101637979",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1064,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7866493800024",
    "orderId": "1064",
    "subOrderId": "1064-1",
    "price": "\u20b9 1,499.00",
    "awbNo": "7866493800024",
    "payment": "COD",
    "customerName": "Divya Verma",
    "phone": "9321412630",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1065,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7869462806178",
    "orderId": "1065",
    "subOrderId": "1065-1",
    "price": "\u20b9 599.00",
    "awbNo": "7869462806178",
    "payment": "COD",
    "customerName": "Naveen Chauhan",
    "phone": "6118543408",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1066,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7867857221324",
    "orderId": "1066",
    "subOrderId": "1066-1",
    "price": "\u20b9 849.00",
    "awbNo": "7867857221324",
    "payment": "COD",
    "customerName": "Neha Talwind",
    "phone": "6465585404",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1067,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7865791662169",
    "orderId": "1067",
    "subOrderId": "1067-1",
    "price": "\u20b9 699.00",
    "awbNo": "7865791662169",
    "payment": "COD",
    "customerName": "Gaurav Rathore",
    "phone": "8603647189",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1068,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7866141226746",
    "orderId": "1068",
    "subOrderId": "1068-1",
    "price": "\u20b9 799.00",
    "awbNo": "7866141226746",
    "payment": "COD",
    "customerName": "Pradeep Rathore",
    "phone": "6007263971",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1069,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7869160639027",
    "orderId": "1069",
    "subOrderId": "1069-1",
    "price": "\u20b9 1,499.00",
    "awbNo": "7869160639027",
    "payment": "COD",
    "customerName": "Amit Bhatia",
    "phone": "7348257414",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1070,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7868289454630",
    "orderId": "1070",
    "subOrderId": "1070-1",
    "price": "\u20b9 1,199.00",
    "awbNo": "7868289454630",
    "payment": "COD",
    "customerName": "Vikas Chauhan",
    "phone": "7728296502",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1071,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7867739255769",
    "orderId": "1071",
    "subOrderId": "1071-1",
    "price": "\u20b9 999.00",
    "awbNo": "7867739255769",
    "payment": "COD",
    "customerName": "Vikas Pandey",
    "phone": "8909058412",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1072,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7866197695041",
    "orderId": "1072",
    "subOrderId": "1072-1",
    "price": "\u20b9 878.00",
    "awbNo": "7866197695041",
    "payment": "COD",
    "customerName": "Arpit Mehta",
    "phone": "7232285036",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1073,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7865659161352",
    "orderId": "1073",
    "subOrderId": "1073-1",
    "price": "\u20b9 799.00",
    "awbNo": "7865659161352",
    "payment": "COD",
    "customerName": "Sumit Agarwal",
    "phone": "8901796894",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1074,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7864464161270",
    "orderId": "1074",
    "subOrderId": "1074-1",
    "price": "\u20b9 878.00",
    "awbNo": "7864464161270",
    "payment": "COD",
    "customerName": "Ritu Mehta",
    "phone": "6964824319",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1075,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7864300636585",
    "orderId": "1075",
    "subOrderId": "1075-1",
    "price": "\u20b9 878.00",
    "awbNo": "7864300636585",
    "payment": "COD",
    "customerName": "Pradeep Patel",
    "phone": "8040695043",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1076,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7868285786023",
    "orderId": "1076",
    "subOrderId": "1076-1",
    "price": "\u20b9 878.00",
    "awbNo": "7868285786023",
    "payment": "COD",
    "customerName": "Rajesh Gupta",
    "phone": "9085272193",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1077,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7863953315788",
    "orderId": "1077",
    "subOrderId": "1077-1",
    "price": "\u20b9 1,099.00",
    "awbNo": "7863953315788",
    "payment": "COD",
    "customerName": "Ritu Singh",
    "phone": "8817747689",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1078,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7862995226582",
    "orderId": "1078",
    "subOrderId": "1078-1",
    "price": "\u20b9 799.00",
    "awbNo": "7862995226582",
    "payment": "COD",
    "customerName": "Aditya Patel",
    "phone": "6755427535",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1079,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7868995059760",
    "orderId": "1079",
    "subOrderId": "1079-1",
    "price": "\u20b9 699.00",
    "awbNo": "7868995059760",
    "payment": "COD",
    "customerName": "Mayank Singh",
    "phone": "9442058095",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1080,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7866322520473",
    "orderId": "1080",
    "subOrderId": "1080-1",
    "price": "\u20b9 799.00",
    "awbNo": "7866322520473",
    "payment": "COD",
    "customerName": "Ritu Joshi",
    "phone": "9289144721",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1081,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7866737421496",
    "orderId": "1081",
    "subOrderId": "1081-1",
    "price": "\u20b9 949.00",
    "awbNo": "7866737421496",
    "payment": "COD",
    "customerName": "Swati Patel",
    "phone": "7167007513",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1082,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7863980491761",
    "orderId": "1082",
    "subOrderId": "1082-1",
    "price": "\u20b9 799.00",
    "awbNo": "7863980491761",
    "payment": "COD",
    "customerName": "Deepak Patel",
    "phone": "7645124051",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1083,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7867625464411",
    "orderId": "1083",
    "subOrderId": "1083-1",
    "price": "\u20b9 878.00",
    "awbNo": "7867625464411",
    "payment": "COD",
    "customerName": "Vikas Rathore",
    "phone": "7421124738",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1084,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7863987248494",
    "orderId": "1084",
    "subOrderId": "1084-1",
    "price": "\u20b9 878.00",
    "awbNo": "7863987248494",
    "payment": "COD",
    "customerName": "Priya Rathore",
    "phone": "7672790155",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1085,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7868531118333",
    "orderId": "1085",
    "subOrderId": "1085-1",
    "price": "\u20b9 999.00",
    "awbNo": "7868531118333",
    "payment": "COD",
    "customerName": "Arpit Mishra",
    "phone": "7282531582",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1086,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7866242173772",
    "orderId": "1086",
    "subOrderId": "1086-1",
    "price": "\u20b9 699.00",
    "awbNo": "7866242173772",
    "payment": "COD",
    "customerName": "Naveen Bhatia",
    "phone": "9856070374",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1087,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7866965096268",
    "orderId": "1087",
    "subOrderId": "1087-1",
    "price": "\u20b9 849.00",
    "awbNo": "7866965096268",
    "payment": "COD",
    "customerName": "Aditya Bansal",
    "phone": "6124660666",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1088,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7861116402431",
    "orderId": "1088",
    "subOrderId": "1088-1",
    "price": "\u20b9 949.00",
    "awbNo": "7861116402431",
    "payment": "COD",
    "customerName": "Pooja Agarwal",
    "phone": "9949401194",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1089,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7866412330148",
    "orderId": "1089",
    "subOrderId": "1089-1",
    "price": "\u20b9 1,199.00",
    "awbNo": "7866412330148",
    "payment": "COD",
    "customerName": "Mayank Kumar",
    "phone": "6215970859",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1090,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7866923301988",
    "orderId": "1090",
    "subOrderId": "1090-1",
    "price": "\u20b9 699.00",
    "awbNo": "7866923301988",
    "payment": "COD",
    "customerName": "Mayank Chauhan",
    "phone": "7449553823",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1091,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7869383431259",
    "orderId": "1091",
    "subOrderId": "1091-1",
    "price": "\u20b9 1,499.00",
    "awbNo": "7869383431259",
    "payment": "COD",
    "customerName": "Rohan Bansal",
    "phone": "6083250566",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1092,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7862062073697",
    "orderId": "1092",
    "subOrderId": "1092-1",
    "price": "\u20b9 599.00",
    "awbNo": "7862062073697",
    "payment": "COD",
    "customerName": "Aman Talwind",
    "phone": "9239406957",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1093,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7865070585433",
    "orderId": "1093",
    "subOrderId": "1093-1",
    "price": "\u20b9 849.00",
    "awbNo": "7865070585433",
    "payment": "COD",
    "customerName": "Deepak Patel",
    "phone": "6542114964",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1094,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7864085320828",
    "orderId": "1094",
    "subOrderId": "1094-1",
    "price": "\u20b9 699.00",
    "awbNo": "7864085320828",
    "payment": "COD",
    "customerName": "Neha Mishra",
    "phone": "6720648887",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1095,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7869284507318",
    "orderId": "1095",
    "subOrderId": "1095-1",
    "price": "\u20b9 878.00",
    "awbNo": "7869284507318",
    "payment": "COD",
    "customerName": "Vikram Shukla",
    "phone": "6110287971",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1096,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7863693985578",
    "orderId": "1096",
    "subOrderId": "1096-1",
    "price": "\u20b9 849.00",
    "awbNo": "7863693985578",
    "payment": "COD",
    "customerName": "Sneha Verma",
    "phone": "8543040948",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1097,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7864361393222",
    "orderId": "1097",
    "subOrderId": "1097-1",
    "price": "\u20b9 999.00",
    "awbNo": "7864361393222",
    "payment": "COD",
    "customerName": "Simran Bhatia",
    "phone": "9459716271",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1098,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7862465576748",
    "orderId": "1098",
    "subOrderId": "1098-1",
    "price": "\u20b9 878.00",
    "awbNo": "7862465576748",
    "payment": "COD",
    "customerName": "Aditya Mishra",
    "phone": "6296166921",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1099,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7868854238082",
    "orderId": "1099",
    "subOrderId": "1099-1",
    "price": "\u20b9 878.00",
    "awbNo": "7868854238082",
    "payment": "COD",
    "customerName": "Vikram Rathore",
    "phone": "7555585773",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1100,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7867371573279",
    "orderId": "1100",
    "subOrderId": "1100-1",
    "price": "\u20b9 849.00",
    "awbNo": "7867371573279",
    "payment": "COD",
    "customerName": "Ananya Saxena",
    "phone": "8793693337",
    "storeName": "My Store-79181",
    "status": "Pickups"
  },
  {
    "id": 1101,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7864658080160",
    "orderId": "1101",
    "subOrderId": "1101-1",
    "price": "\u20b9 699.00",
    "awbNo": "7864658080160",
    "payment": "COD",
    "customerName": "Sanjay Joshi",
    "phone": "7384287616",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1102,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7866922713963",
    "orderId": "1102",
    "subOrderId": "1102-1",
    "price": "\u20b9 878.00",
    "awbNo": "7866922713963",
    "payment": "COD",
    "customerName": "Sumit Patel",
    "phone": "9223271103",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1103,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7866206015111",
    "orderId": "1103",
    "subOrderId": "1103-1",
    "price": "\u20b9 1,249.00",
    "awbNo": "7866206015111",
    "payment": "COD",
    "customerName": "Gaurav Kumar",
    "phone": "8094011037",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1104,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7869074999565",
    "orderId": "1104",
    "subOrderId": "1104-1",
    "price": "\u20b9 999.00",
    "awbNo": "7869074999565",
    "payment": "COD",
    "customerName": "Divya Bhatia",
    "phone": "9011561274",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1105,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7868387664437",
    "orderId": "1105",
    "subOrderId": "1105-1",
    "price": "\u20b9 999.00",
    "awbNo": "7868387664437",
    "payment": "COD",
    "customerName": "Sneha Verma",
    "phone": "7036616336",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1106,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7868352307139",
    "orderId": "1106",
    "subOrderId": "1106-1",
    "price": "\u20b9 1,099.00",
    "awbNo": "7868352307139",
    "payment": "COD",
    "customerName": "Ritu Bansal",
    "phone": "8774131811",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1107,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7866246716604",
    "orderId": "1107",
    "subOrderId": "1107-1",
    "price": "\u20b9 699.00",
    "awbNo": "7866246716604",
    "payment": "COD",
    "customerName": "Nishant Verma",
    "phone": "7263732197",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1108,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7866771394050",
    "orderId": "1108",
    "subOrderId": "1108-1",
    "price": "\u20b9 1,249.00",
    "awbNo": "7866771394050",
    "payment": "COD",
    "customerName": "Sanjay Mishra",
    "phone": "8032638323",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1109,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7862079770569",
    "orderId": "1109",
    "subOrderId": "1109-1",
    "price": "\u20b9 849.00",
    "awbNo": "7862079770569",
    "payment": "COD",
    "customerName": "Mayank Joshi",
    "phone": "7316935719",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1110,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7863964229896",
    "orderId": "1110",
    "subOrderId": "1110-1",
    "price": "\u20b9 1,199.00",
    "awbNo": "7863964229896",
    "payment": "COD",
    "customerName": "Sneha Chauhan",
    "phone": "6513483708",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1111,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7867858164010",
    "orderId": "1111",
    "subOrderId": "1111-1",
    "price": "\u20b9 1,199.00",
    "awbNo": "7867858164010",
    "payment": "COD",
    "customerName": "Tarun Joshi",
    "phone": "9112068867",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1112,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7866065662867",
    "orderId": "1112",
    "subOrderId": "1112-1",
    "price": "\u20b9 849.00",
    "awbNo": "7866065662867",
    "payment": "COD",
    "customerName": "Swati Patel",
    "phone": "7549972386",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1113,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7869824122054",
    "orderId": "1113",
    "subOrderId": "1113-1",
    "price": "\u20b9 849.00",
    "awbNo": "7869824122054",
    "payment": "COD",
    "customerName": "Naveen Singh",
    "phone": "7178158203",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1114,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7864748302739",
    "orderId": "1114",
    "subOrderId": "1114-1",
    "price": "\u20b9 878.00",
    "awbNo": "7864748302739",
    "payment": "COD",
    "customerName": "Manish Bansal",
    "phone": "6440610570",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1115,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7865515628633",
    "orderId": "1115",
    "subOrderId": "1115-1",
    "price": "\u20b9 799.00",
    "awbNo": "7865515628633",
    "payment": "COD",
    "customerName": "Tarun Agarwal",
    "phone": "7463320861",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1116,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7869908115095",
    "orderId": "1116",
    "subOrderId": "1116-1",
    "price": "\u20b9 949.00",
    "awbNo": "7869908115095",
    "payment": "COD",
    "customerName": "Aman Pandey",
    "phone": "8112035409",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1117,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7862065972034",
    "orderId": "1117",
    "subOrderId": "1117-1",
    "price": "\u20b9 599.00",
    "awbNo": "7862065972034",
    "payment": "COD",
    "customerName": "Deepak Shukla",
    "phone": "7304963614",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1118,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7866928678489",
    "orderId": "1118",
    "subOrderId": "1118-1",
    "price": "\u20b9 699.00",
    "awbNo": "7866928678489",
    "payment": "COD",
    "customerName": "Anil Bhatia",
    "phone": "6969318858",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1119,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7869848621776",
    "orderId": "1119",
    "subOrderId": "1119-1",
    "price": "\u20b9 1,099.00",
    "awbNo": "7869848621776",
    "payment": "COD",
    "customerName": "Sanjay Rathore",
    "phone": "7311598149",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1120,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7863836517266",
    "orderId": "1120",
    "subOrderId": "1120-1",
    "price": "\u20b9 1,199.00",
    "awbNo": "7863836517266",
    "payment": "COD",
    "customerName": "Priya Gupta",
    "phone": "7136646449",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1121,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7861672302490",
    "orderId": "1121",
    "subOrderId": "1121-1",
    "price": "\u20b9 878.00",
    "awbNo": "7861672302490",
    "payment": "COD",
    "customerName": "Ananya Trivedi",
    "phone": "6322401182",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1122,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7861140187131",
    "orderId": "1122",
    "subOrderId": "1122-1",
    "price": "\u20b9 849.00",
    "awbNo": "7861140187131",
    "payment": "COD",
    "customerName": "Anil Bansal",
    "phone": "7250949136",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1123,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7863952295757",
    "orderId": "1123",
    "subOrderId": "1123-1",
    "price": "\u20b9 1,099.00",
    "awbNo": "7863952295757",
    "payment": "COD",
    "customerName": "Swati Agarwal",
    "phone": "6305714736",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1124,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7861610900200",
    "orderId": "1124",
    "subOrderId": "1124-1",
    "price": "\u20b9 949.00",
    "awbNo": "7861610900200",
    "payment": "COD",
    "customerName": "Sanjay Gupta",
    "phone": "7825957977",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1125,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7869251459094",
    "orderId": "1125",
    "subOrderId": "1125-1",
    "price": "\u20b9 799.00",
    "awbNo": "7869251459094",
    "payment": "COD",
    "customerName": "Simran Bhatia",
    "phone": "9216748927",
    "storeName": "My Store-79181",
    "status": "In-Transit"
  },
  {
    "id": 1126,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7867614170462",
    "orderId": "1126",
    "subOrderId": "1126-1",
    "price": "\u20b9 799.00",
    "awbNo": "7867614170462",
    "payment": "COD",
    "customerName": "Mayank Mehta",
    "phone": "9005333281",
    "storeName": "My Store-79181",
    "status": "Out For Delivery"
  },
  {
    "id": 1127,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7862075321966",
    "orderId": "1127",
    "subOrderId": "1127-1",
    "price": "\u20b9 1,199.00",
    "awbNo": "7862075321966",
    "payment": "COD",
    "customerName": "Anil Talwind",
    "phone": "9820042236",
    "storeName": "My Store-79181",
    "status": "Out For Delivery"
  },
  {
    "id": 1128,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7864248149900",
    "orderId": "1128",
    "subOrderId": "1128-1",
    "price": "\u20b9 999.00",
    "awbNo": "7864248149900",
    "payment": "COD",
    "customerName": "Rajesh Shukla",
    "phone": "6089101055",
    "storeName": "My Store-79181",
    "status": "Out For Delivery"
  },
  {
    "id": 1129,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7868792122716",
    "orderId": "1129",
    "subOrderId": "1129-1",
    "price": "\u20b9 878.00",
    "awbNo": "7868792122716",
    "payment": "COD",
    "customerName": "Sumit Joshi",
    "phone": "6779489931",
    "storeName": "My Store-79181",
    "status": "Out For Delivery"
  },
  {
    "id": 1130,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7865985704790",
    "orderId": "1130",
    "subOrderId": "1130-1",
    "price": "\u20b9 849.00",
    "awbNo": "7865985704790",
    "payment": "COD",
    "customerName": "Kunal Rathore",
    "phone": "7431548670",
    "storeName": "My Store-79181",
    "status": "Out For Delivery"
  },
  {
    "id": 1131,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7869354542654",
    "orderId": "1131",
    "subOrderId": "1131-1",
    "price": "\u20b9 878.00",
    "awbNo": "7869354542654",
    "payment": "COD",
    "customerName": "Kartik Mehta",
    "phone": "8845774616",
    "storeName": "My Store-79181",
    "status": "Out For Delivery"
  },
  {
    "id": 1132,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7862388450337",
    "orderId": "1132",
    "subOrderId": "1132-1",
    "price": "\u20b9 999.00",
    "awbNo": "7862388450337",
    "payment": "COD",
    "customerName": "Rohan Chauhan",
    "phone": "7084044802",
    "storeName": "My Store-79181",
    "status": "Out For Delivery"
  },
  {
    "id": 1133,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7862774884818",
    "orderId": "1133",
    "subOrderId": "1133-1",
    "price": "\u20b9 999.00",
    "awbNo": "7862774884818",
    "payment": "COD",
    "customerName": "Arpit Trivedi",
    "phone": "7984173309",
    "storeName": "My Store-79181",
    "status": "Out For Delivery"
  },
  {
    "id": 1134,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7861221670908",
    "orderId": "1134",
    "subOrderId": "1134-1",
    "price": "\u20b9 999.00",
    "awbNo": "7861221670908",
    "payment": "COD",
    "customerName": "Harsh Bhatia",
    "phone": "9248898619",
    "storeName": "My Store-79181",
    "status": "Out For Delivery"
  },
  {
    "id": 1135,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7863081821325",
    "orderId": "1135",
    "subOrderId": "1135-1",
    "price": "\u20b9 1,499.00",
    "awbNo": "7863081821325",
    "payment": "COD",
    "customerName": "Manish Mehta",
    "phone": "7881694278",
    "storeName": "My Store-79181",
    "status": "Out For Delivery"
  },
  {
    "id": 1136,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7865975196341",
    "orderId": "1136",
    "subOrderId": "1136-1",
    "price": "\u20b9 999.00",
    "awbNo": "7865975196341",
    "payment": "COD",
    "customerName": "Anil Patel",
    "phone": "9048494026",
    "storeName": "My Store-79181",
    "status": "Out For Delivery"
  },
  {
    "id": 1137,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7864921003983",
    "orderId": "1137",
    "subOrderId": "1137-1",
    "price": "\u20b9 799.00",
    "awbNo": "7864921003983",
    "payment": "COD",
    "customerName": "Vikas Verma",
    "phone": "6965081954",
    "storeName": "My Store-79181",
    "status": "Out For Delivery"
  },
  {
    "id": 1138,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7868324687182",
    "orderId": "1138",
    "subOrderId": "1138-1",
    "price": "\u20b9 878.00",
    "awbNo": "7868324687182",
    "payment": "COD",
    "customerName": "Deepak Bansal",
    "phone": "9077787850",
    "storeName": "My Store-79181",
    "status": "Out For Delivery"
  },
  {
    "id": 1139,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7863367665472",
    "orderId": "1139",
    "subOrderId": "1139-1",
    "price": "\u20b9 1,199.00",
    "awbNo": "7863367665472",
    "payment": "COD",
    "customerName": "Tarun Patel",
    "phone": "7961882949",
    "storeName": "My Store-79181",
    "status": "Out For Delivery"
  },
  {
    "id": 1140,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7864776677517",
    "orderId": "1140",
    "subOrderId": "1140-1",
    "price": "\u20b9 699.00",
    "awbNo": "7864776677517",
    "payment": "COD",
    "customerName": "Anil Saxena",
    "phone": "9205302077",
    "storeName": "My Store-79181",
    "status": "Out For Delivery"
  },
  {
    "id": 1141,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7867475684019",
    "orderId": "1141",
    "subOrderId": "1141-1",
    "price": "\u20b9 699.00",
    "awbNo": "7867475684019",
    "payment": "COD",
    "customerName": "Vikas Chauhan",
    "phone": "9383220511",
    "storeName": "My Store-79181",
    "status": "Delivered"
  },
  {
    "id": 1142,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7865933179746",
    "orderId": "1142",
    "subOrderId": "1142-1",
    "price": "\u20b9 1,249.00",
    "awbNo": "7865933179746",
    "payment": "COD",
    "customerName": "Simran Shukla",
    "phone": "8490751945",
    "storeName": "My Store-79181",
    "status": "Delivered"
  },
  {
    "id": 1143,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7867628981661",
    "orderId": "1143",
    "subOrderId": "1143-1",
    "price": "\u20b9 1,249.00",
    "awbNo": "7867628981661",
    "payment": "COD",
    "customerName": "Amit Trivedi",
    "phone": "9276513211",
    "storeName": "My Store-79181",
    "status": "Delivered"
  },
  {
    "id": 1144,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7862644847276",
    "orderId": "1144",
    "subOrderId": "1144-1",
    "price": "\u20b9 878.00",
    "awbNo": "7862644847276",
    "payment": "COD",
    "customerName": "Sneha Patel",
    "phone": "8455852189",
    "storeName": "My Store-79181",
    "status": "Delivered"
  },
  {
    "id": 1145,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7866932342612",
    "orderId": "1145",
    "subOrderId": "1145-1",
    "price": "\u20b9 878.00",
    "awbNo": "7866932342612",
    "payment": "COD",
    "customerName": "Gaurav Bansal",
    "phone": "9028930672",
    "storeName": "My Store-79181",
    "status": "Delivered"
  },
  {
    "id": 1146,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7868924383984",
    "orderId": "1146",
    "subOrderId": "1146-1",
    "price": "\u20b9 999.00",
    "awbNo": "7868924383984",
    "payment": "COD",
    "customerName": "Pradeep Singh",
    "phone": "8157324056",
    "storeName": "My Store-79181",
    "status": "Delivered"
  },
  {
    "id": 1147,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7865914110094",
    "orderId": "1147",
    "subOrderId": "1147-1",
    "price": "\u20b9 799.00",
    "awbNo": "7865914110094",
    "payment": "COD",
    "customerName": "Mayank Yadav",
    "phone": "9102872611",
    "storeName": "My Store-79181",
    "status": "Delivered"
  },
  {
    "id": 1148,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7867586857685",
    "orderId": "1148",
    "subOrderId": "1148-1",
    "price": "\u20b9 1,499.00",
    "awbNo": "7867586857685",
    "payment": "COD",
    "customerName": "Tarun Joshi",
    "phone": "7454109425",
    "storeName": "My Store-79181",
    "status": "Delivered"
  },
  {
    "id": 1149,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7863651968205",
    "orderId": "1149",
    "subOrderId": "1149-1",
    "price": "\u20b9 1,499.00",
    "awbNo": "7863651968205",
    "payment": "COD",
    "customerName": "Kartik Trivedi",
    "phone": "6154185462",
    "storeName": "My Store-79181",
    "status": "Delivered"
  },
  {
    "id": 1150,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7865683143581",
    "orderId": "1150",
    "subOrderId": "1150-1",
    "price": "\u20b9 1,099.00",
    "awbNo": "7865683143581",
    "payment": "COD",
    "customerName": "Swati Patel",
    "phone": "9207337120",
    "storeName": "My Store-79181",
    "status": "Delivered"
  },
  {
    "id": 1151,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7868275679594",
    "orderId": "1151",
    "subOrderId": "1151-1",
    "price": "\u20b9 878.00",
    "awbNo": "7868275679594",
    "payment": "COD",
    "customerName": "Vikram Agarwal",
    "phone": "6714531298",
    "storeName": "My Store-79181",
    "status": "Delivered"
  },
  {
    "id": 1152,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7866834555633",
    "orderId": "1152",
    "subOrderId": "1152-1",
    "price": "\u20b9 949.00",
    "awbNo": "7866834555633",
    "payment": "COD",
    "customerName": "Gaurav Talwind",
    "phone": "7260005019",
    "storeName": "My Store-79181",
    "status": "Delivered"
  },
  {
    "id": 1153,
    "orderDate": "25-11-2026",
    "confirmDate": "25-11-2026",
    "awbDate": "25-11-2026",
    "pickupDate": "25-11-2026",
    "shopifyOrderId": "7864403845222",
    "orderId": "1153",
    "subOrderId": "1153-1",
    "price": "\u20b9 949.00",
    "awbNo": "7864403845222",
    "payment": "COD",
    "customerName": "Ritu Saxena",
    "phone": "7769748771",
    "storeName": "My Store-79181",
    "status": "Delivered"
  },
  {
    "id": 1154,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7863934040683",
    "orderId": "1154",
    "subOrderId": "1154-1",
    "price": "\u20b9 599.00",
    "awbNo": "7863934040683",
    "payment": "COD",
    "customerName": "Rohan Bhatia",
    "phone": "9740227599",
    "storeName": "My Store-79181",
    "status": "Delivered"
  },
  {
    "id": 1155,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7868034746821",
    "orderId": "1155",
    "subOrderId": "1155-1",
    "price": "\u20b9 699.00",
    "awbNo": "7868034746821",
    "payment": "COD",
    "customerName": "Deepak Patel",
    "phone": "7980623803",
    "storeName": "My Store-79181",
    "status": "Delivered"
  },
  {
    "id": 1156,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7863347621138",
    "orderId": "1156",
    "subOrderId": "1156-1",
    "price": "\u20b9 878.00",
    "awbNo": "7863347621138",
    "payment": "COD",
    "customerName": "Arpit Agarwal",
    "phone": "9870665004",
    "storeName": "My Store-79181",
    "status": "RTO"
  },
  {
    "id": 1157,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7866369130994",
    "orderId": "1157",
    "subOrderId": "1157-1",
    "price": "\u20b9 1,199.00",
    "awbNo": "7866369130994",
    "payment": "COD",
    "customerName": "Kunal Shukla",
    "phone": "7284857706",
    "storeName": "My Store-79181",
    "status": "RTO"
  },
  {
    "id": 1158,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7866313758032",
    "orderId": "1158",
    "subOrderId": "1158-1",
    "price": "\u20b9 599.00",
    "awbNo": "7866313758032",
    "payment": "COD",
    "customerName": "Sachin Bansal",
    "phone": "6458072318",
    "storeName": "My Store-79181",
    "status": "RTO"
  },
  {
    "id": 1159,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7868122042835",
    "orderId": "1159",
    "subOrderId": "1159-1",
    "price": "\u20b9 878.00",
    "awbNo": "7868122042835",
    "payment": "COD",
    "customerName": "Swati Mehta",
    "phone": "6094229853",
    "storeName": "My Store-79181",
    "status": "RTO"
  },
  {
    "id": 1160,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7864431078106",
    "orderId": "1160",
    "subOrderId": "1160-1",
    "price": "\u20b9 1,199.00",
    "awbNo": "7864431078106",
    "payment": "COD",
    "customerName": "Rajesh Talwind",
    "phone": "9911070030",
    "storeName": "My Store-79181",
    "status": "RTO"
  },
  {
    "id": 1161,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7864600630513",
    "orderId": "1161",
    "subOrderId": "1161-1",
    "price": "\u20b9 1,499.00",
    "awbNo": "7864600630513",
    "payment": "COD",
    "customerName": "Sneha Bhatia",
    "phone": "7076433900",
    "storeName": "My Store-79181",
    "status": "Cancelled"
  },
  {
    "id": 1162,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7862893321208",
    "orderId": "1162",
    "subOrderId": "1162-1",
    "price": "\u20b9 849.00",
    "awbNo": "7862893321208",
    "payment": "COD",
    "customerName": "Pradeep Mehta",
    "phone": "9387056244",
    "storeName": "My Store-79181",
    "status": "Cancelled"
  },
  {
    "id": 1163,
    "orderDate": "23-11-2026",
    "confirmDate": "23-11-2026",
    "awbDate": "23-11-2026",
    "pickupDate": "23-11-2026",
    "shopifyOrderId": "7866562457052",
    "orderId": "1163",
    "subOrderId": "1163-1",
    "price": "\u20b9 949.00",
    "awbNo": "7866562457052",
    "payment": "COD",
    "customerName": "Manish Verma",
    "phone": "9906821722",
    "storeName": "My Store-79181",
    "status": "Cancelled"
  },
  {
    "id": 1164,
    "orderDate": "24-11-2026",
    "confirmDate": "24-11-2026",
    "awbDate": "24-11-2026",
    "pickupDate": "24-11-2026",
    "shopifyOrderId": "7869467483275",
    "orderId": "1164",
    "subOrderId": "1164-1",
    "price": "\u20b9 949.00",
    "awbNo": "7869467483275",
    "payment": "COD",
    "customerName": "Sneha Singh",
    "phone": "9378046814",
    "storeName": "My Store-79181",
    "status": "Cancelled"
  },
  {
    "id": 1165,
    "orderDate": "26-11-2026",
    "confirmDate": "26-11-2026",
    "awbDate": "26-11-2026",
    "pickupDate": "26-11-2026",
    "shopifyOrderId": "7869033293776",
    "orderId": "1165",
    "subOrderId": "1165-1",
    "price": "\u20b9 878.00",
    "awbNo": "7869033293776",
    "payment": "COD",
    "customerName": "Neha Bansal",
    "phone": "9463841709",
    "storeName": "My Store-79181",
    "status": "Cancelled"
  }
];

  let currentTab = "Pickups";
  let searchQuery = "";
  let selectedOrders = new Set();
  let pageSize = 50;
  let currentPage = 1;

  // DOM Elements
  const sidebar = document.getElementById("sidebar");
  const sidebarTexts = document.querySelectorAll(".sidebar-text");
  const filtersToggle = document.getElementById("filters-toggle");
  const filterControls = document.getElementById("filter-controls");
  const tableBody = document.getElementById("shipment-table-body");
  const noDataMsg = document.getElementById("no-data-msg");
  const totalCountPill = document.getElementById("total-count-pill");
  const showingText = document.getElementById("showing-text");
  const statusTabs = document.querySelectorAll(".status-tab");
  const searchInput = document.getElementById("order-search-input");
  const selectAll = document.getElementById("select-all-orders");
  const exportBtn = document.getElementById("export-csv-btn");
  const pageSizeSelect = document.getElementById("page-size-select");
  const prevPageBtn = document.getElementById("prev-page-btn");
  const nextPageBtn = document.getElementById("next-page-btn");
  const pageNumDisplay = document.getElementById("page-num-display");

  // Modal elements
  const modal = document.getElementById("order-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const modalOrderTitle = document.getElementById("modal-order-title");
  const modalOrderSub = document.getElementById("modal-order-sub");
  const modalOrderContent = document.getElementById("modal-order-content");

  // 2. Sidebar Hover Auto-Expand / Collapse
  if (sidebar) {
    sidebar.addEventListener("mouseenter", () => {
      sidebar.classList.remove("w-[68px]");
      sidebar.classList.add("w-[230px]", "shadow-xl");
      sidebarTexts.forEach(t => t.classList.remove("hidden"));
    });
    sidebar.addEventListener("mouseleave", () => {
      sidebar.classList.remove("w-[230px]", "shadow-xl");
      sidebar.classList.add("w-[68px]");
      sidebarTexts.forEach(t => t.classList.add("hidden"));
    });
  }

  // 3. Filters Section Collapsible Toggle
  if (filtersToggle && filterControls) {
    filtersToggle.addEventListener("click", () => {
      const isHidden = filterControls.classList.contains("hidden");
      if (isHidden) {
        filterControls.classList.remove("hidden");
        document.getElementById("filter-chevron").style.transform = "rotate(180deg)";
      } else {
        filterControls.classList.add("hidden");
        document.getElementById("filter-chevron").style.transform = "rotate(0deg)";
      }
    });
  }

  // 4. Render Table with Pagination & Active Filter
  function renderTable() {
    let filtered = ORDERS_DATA.filter(o => {
      if (currentTab !== "All" && o.status !== currentTab) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match = o.orderId.toLowerCase().includes(q) ||
                      o.shopifyOrderId.toLowerCase().includes(q) ||
                      o.customerName.toLowerCase().includes(q) ||
                      o.phone.toLowerCase().includes(q) ||
                      o.storeName.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    });

    tableBody.innerHTML = "";

    if (filtered.length === 0) {
      noDataMsg.classList.remove("hidden");
      totalCountPill.textContent = "0";
      showingText.textContent = "Showing : 0 to 0 of 0";
      if (prevPageBtn) prevPageBtn.disabled = true;
      if (nextPageBtn) nextPageBtn.disabled = true;
      if (pageNumDisplay) pageNumDisplay.textContent = "Page 1 of 1";
      return;
    }

    noDataMsg.classList.add("hidden");
    totalCountPill.textContent = filtered.length.toString();

    // Pagination calculations
    const totalPages = Math.ceil(filtered.length / pageSize) || 1;
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIdx = (currentPage - 1) * pageSize;
    const endIdx = Math.min(startIdx + pageSize, filtered.length);
    const paginatedItems = filtered.slice(startIdx, endIdx);

    showingText.textContent = `Showing : ${startIdx + 1} to ${endIdx} of ${filtered.length}`;
    if (pageNumDisplay) pageNumDisplay.textContent = `Page ${currentPage} of ${totalPages}`;
    if (prevPageBtn) prevPageBtn.disabled = (currentPage === 1);
    if (nextPageBtn) nextPageBtn.disabled = (currentPage === totalPages);

    paginatedItems.forEach(order => {
      const tr = document.createElement("tr");
      tr.className = "border-b border-[#f3f4f6] hover:bg-[#fbfbfe] transition-colors group text-[13px] text-[#374151]";
      
      const isChecked = selectedOrders.has(order.id);

      tr.innerHTML = `
        <td class="py-3 px-3.5 text-center">
          <svg class="w-4 h-4 text-[#9ca3af] hover:text-[#111827] cursor-pointer inline-block transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </td>
        <td class="py-3 px-3.5 text-center">
          <input type="checkbox" class="order-checkbox rounded border-gray-300 text-[#5e2c9e] focus:ring-[#5e2c9e] cursor-pointer" data-id="${order.id}" ${isChecked ? "checked" : ""}>
        </td>
        <td class="py-3 px-3.5 whitespace-nowrap text-[#4b5563]">${order.orderDate}</td>
        <td class="py-3 px-3.5 whitespace-nowrap text-[#4b5563]">${order.confirmDate}</td>
        <td class="py-3 px-3.5 whitespace-nowrap text-[#4b5563]">${order.awbDate}</td>
        <td class="py-3 px-3.5 whitespace-nowrap text-[#4b5563]">${order.pickupDate}</td>
        <td class="py-3 px-3.5 whitespace-nowrap font-medium text-[#111827]">${order.shopifyOrderId}</td>
        <td class="py-3 px-3.5 whitespace-nowrap font-medium text-[#111827]">${order.orderId}</td>
        <td class="py-3 px-3.5 whitespace-nowrap text-[#4b5563]">${order.subOrderId}</td>
        <td class="py-3 px-3.5 whitespace-nowrap font-semibold text-[#111827]">
          ${order.price} <span class="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#84cc16] text-white text-[9px] font-bold ml-1">?</span>
        </td>
        <td class="py-3 px-3.5 whitespace-nowrap text-[#4b5563]">${order.awbNo}</td>
        <td class="py-3 px-3.5 whitespace-nowrap font-medium text-[#374151]">${order.payment}</td>
        <td class="py-3 px-3.5 whitespace-nowrap font-medium text-[#111827] max-w-[140px] truncate" title="${order.customerName}">${order.customerName}</td>
        <td class="py-3 px-3.5 whitespace-nowrap text-[#4b5563]">${order.phone}</td>
        <td class="py-3 px-3.5 whitespace-nowrap text-[#4b5563]">${order.storeName}</td>
        <td class="py-3 px-3.5 whitespace-nowrap text-center">
          <button type="button" class="view-order-btn p-1.5 rounded-lg text-[#374151] hover:text-[#5e2c9e] hover:bg-[#f3e8ff] transition-all" data-id="${order.id}" title="View Details">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
          </button>
        </td>
        <td class="py-3 px-3.5 whitespace-nowrap text-center">
          <button type="button" class="row-options-btn p-1.5 rounded-xl border border-[#e5e7eb] bg-white text-[#4b5563] hover:border-[#9ca3af] hover:text-[#111827] shadow-sm transition-all" data-id="${order.id}" title="More options">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/></svg>
          </button>
        </td>
      `;

      tableBody.appendChild(tr);
    });

    // Bind checkboxes
    document.querySelectorAll(".order-checkbox").forEach(cb => {
      cb.addEventListener("change", (e) => {
        const id = parseInt(e.target.dataset.id, 10);
        if (e.target.checked) {
          selectedOrders.add(id);
        } else {
          selectedOrders.delete(id);
        }
      });
    });

    // Bind modal open
    document.querySelectorAll(".view-order-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = parseInt(e.currentTarget.dataset.id, 10);
        const order = ORDERS_DATA.find(o => o.id === id);
        if (order && modal) {
          modalOrderTitle.textContent = `Order #${order.orderId} - ${order.customerName}`;
          modalOrderSub.textContent = `Shopify ID: ${order.shopifyOrderId} | Store: ${order.storeName}`;
          modalOrderContent.innerHTML = `
            <div class="grid grid-cols-2 gap-3 bg-[#f9fafb] p-3.5 rounded-xl border border-[#e5e7eb]">
              <div><span class="text-[#6b7280]">Order Date:</span> <strong>${order.orderDate}</strong></div>
              <div><span class="text-[#6b7280]">Payment:</span> <strong>${order.payment}</strong></div>
              <div><span class="text-[#6b7280]">Total Price:</span> <strong class="text-[#5e2c9e]">${order.price}</strong></div>
              <div><span class="text-[#6b7280]">Phone:</span> <strong>${order.phone}</strong></div>
              <div><span class="text-[#6b7280]">Status:</span> <span class="bg-[#f3e8ff] text-[#5e2c9e] px-2 py-0.5 rounded-full text-xs font-bold">${order.status}</span></div>
              <div><span class="text-[#6b7280]">Store:</span> <strong>${order.storeName}</strong></div>
            </div>
            <div class="pt-2 flex justify-end gap-2">
              <button type="button" class="border border-[#d1d5db] text-[#374151] px-4 py-1.5 rounded-xl text-xs font-bold hover:bg-gray-100" onclick="document.getElementById('order-modal').classList.add('hidden')">Close</button>
              <button type="button" class="bg-[#5e2c9e] text-white px-4 py-1.5 rounded-xl text-xs font-bold hover:bg-[#4a1d85]" onclick="alert('Tracking label generated for Order #${order.orderId}')">Print Shipping Label</button>
            </div>
          `;
          modal.classList.remove("hidden");
        }
      });
    });

    // 3 Dots button alert
    document.querySelectorAll(".row-options-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        alert(`Options for Order #${id}:\n- Print Waybill\n- Track AWB\n- Re-assign Pickup\n- Download Invoice`);
      });
    });
  }

  // 6. Close Modal
  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  }

  // 7. Status Tabs Switching
  statusTabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      statusTabs.forEach(t => {
        t.className = "status-tab text-[#4b5563] hover:text-[#111827] px-4 py-2 text-[13px] font-semibold rounded-xl transition-all cursor-pointer";
      });
      e.currentTarget.className = "status-tab tab-active px-5 py-2 rounded-xl text-[13px] transition-all cursor-pointer";
      currentTab = e.currentTarget.dataset.status;
      currentPage = 1;
      renderTable();
    });
  });

  // 8. Search Input Filter
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      currentPage = 1;
      renderTable();
    });
  }

  // 9. Page Size Select & Pagination Buttons
  if (pageSizeSelect) {
    pageSizeSelect.addEventListener("change", (e) => {
      pageSize = parseInt(e.target.value, 10) || 50;
      currentPage = 1;
      renderTable();
    });
  }

  if (prevPageBtn) {
    prevPageBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderTable();
      }
    });
  }

  if (nextPageBtn) {
    nextPageBtn.addEventListener("click", () => {
      currentPage++;
      renderTable();
    });
  }

  // 10. Select All Checkbox
  if (selectAll) {
    selectAll.addEventListener("change", (e) => {
      if (e.target.checked) {
        ORDERS_DATA.forEach(o => selectedOrders.add(o.id));
      } else {
        selectedOrders.clear();
      }
      renderTable();
    });
  }

  // 11. Export CSV Button
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const csvContent = "data:text/csv;charset=utf-8," +
        ["Order ID,Order Date,Shopify Order ID,Customer Name,Phone,Store Name,Payment,Price,Status"].join(",") + "\n" +
        ORDERS_DATA.map(o => [o.orderId, o.orderDate, o.shopifyOrderId, `\"${o.customerName}\"`, o.phone, o.storeName, o.payment, `\"${o.price}\"`, o.status].join(",")).join("\n");
      
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `Dropdash_Shipment_Export_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  // Initial table render
  renderTable();
});
