

export class ServerResult{
  ResponseText!: string;
  ResponseCode!: number
  SystemConfig!: SystemConfig;

};


class SystemConfig
{

  ID!: number;
  TopbarLogoImage!: string;
  FooterLogoImage!: string;
  CurrencySign!: string;
  ReportsLogo!: string;
  IsActive!: boolean;
  FooterText!: string
}
