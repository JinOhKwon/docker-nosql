db.createUser({
    user: "lifeUser",
    pwd: passwordPrompt(),
    roles: [
        {
            role: "userAdminAnyDatabase",
            db: "admin",
        },
        "readWriteAnyDatabase",
    ],
});
