namespace IchsServer.Models
{
    public class Dotaznik
    {

        public string? Name { get; set; }
        public string? LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string? AddressStreetNum { get; set; }
        public string? AddressPostalCode { get; set; }
        public string? AddressCity { get; set; }
        public string? AddressCountry { get; set; }
        public int Height { get; set; }
        public int Weight { get; set; }
        public Boolean PhysicalActivity { get; set; }
        public Boolean Smoking { get; set; }
        public Boolean Alcohol { get; set; }
        public string? PressureSys { get; set; }
        public string? PressureDias { get; set; }
        public Boolean VegieFruit { get; set; }
        public Boolean Stress { get; set; }
        public string? Sugar { get; set; }
        public string? Cholesterol { get; set; }
        public string? Gender { get; set; }
    }
}
