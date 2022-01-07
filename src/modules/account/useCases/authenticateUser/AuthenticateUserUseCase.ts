import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string,
    email: string
  },
  token: string;
}

@injectable()
class AuthenticateUserUseCase {

  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository
  ) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    //Usuario existe
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email or password is incorrect");
    }
    //Senha esta correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or password is incorrect");
    }
    //Gerar json web token
    const token = sign({}, "be099fcd19a5a65037e9a1f594379027", {
      subject: user.id,
      expiresIn: "1d"
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      }
    }

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase }