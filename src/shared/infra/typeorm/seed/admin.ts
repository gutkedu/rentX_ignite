import { getConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { hash } from "bcryptjs";
import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const password = await hash("admin", 8);
  const id = uuidV4();

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at , driver_license)
      values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXXXX')
    `
  );

  await connection.close;
}

create().then(() => console.log("User admin created!"));
