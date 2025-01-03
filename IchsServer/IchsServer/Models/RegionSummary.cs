namespace IchsServer.Models
{
    public class RegionSummary
    {
        public string Region { get; set; }
        public int TotalCount { get; set; }
        public int FilteredCount { get; set; }
        public double Percentage { get; set; }
        public bool IsActive { get; set; }
    }

}
