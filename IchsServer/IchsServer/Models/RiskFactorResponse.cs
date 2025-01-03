namespace IchsServer.Models
{
    public class RiskFactorResponse
    {

        public bool alcoholF { get; set; }
        public bool vegieAndFruitF { get; set; }
        public bool psychosocialF { get; set; }
        public bool hypertenseF { get; set; }
        public bool diabetesF { get; set; }
        public bool smokingF { get; set; }
        public bool dyslipidemicF { get; set; }
        public bool obesityF { get; set; }
        public bool physicalF { get; set; }

        public int score { get; set; }

    }
}
