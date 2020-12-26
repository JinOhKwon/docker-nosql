print("####################### Start ##############################");

print(
    "-------------------------- admin 생성 -----------------------------------"
);

db.createUser({
  user: "admin",  
  pwd: "qwert12345!@",  
  roles: [          
    {
      role: "root", 
      db: "admin"   
    }
  ]}
)

print(
    "-------------------------- PROD 생성 -----------------------------------"
);

db = db.getSiblingDB("prod_life");
db.createUser({
    user: "lifeProdUser",
    pwd: "qwert12345!@",
    roles: [{ role: "dbOwner", db: "prod_life" }],
});
db.createCollection("users");

print(
    "-------------------------- DEV 생성 -----------------------------------"
);

db = db.getSiblingDB("dev_life");
db.createUser({
    user: "lifeDevUser",
    pwd: "qwert12345!@",
    roles: [{ role: "dbOwner", db: "dev_life" }],
});
db.createCollection("users");

print("########################## END ################################");
