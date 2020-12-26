print("####################### Start ##############################");

print(
    "-------------------------- PROD 생성 -----------------------------------"
);

db = db.getSiblingDB("prod_life");
db.createUser({
    user: "prodLifeUser",
    pwd: "qwert12345!@",
    roles: [{ role: "dbOwner", db: "prod_life" }],
});
db.createCollection("users");

print(
    "-------------------------- DEV 생성 -----------------------------------"
);

db = db.getSiblingDB("dev_life");
db.createUser({
    user: "devLifeUser",
    pwd: "qwert12345!@",
    roles: [{ role: "dbOwner", db: "dev_life" }],
});
db.createCollection("users");

print("########################## END ################################");
