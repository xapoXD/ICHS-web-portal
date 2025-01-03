using CsvHelper;
using System.Globalization;

namespace IchsServer.Services
{
    public class CSVService : ICSVService
    {
        public IEnumerable<T> ReadCSV<T>(string file) //Stream file
        {
            var reader = new StreamReader(file);
            var csv = new CsvReader(reader, CultureInfo.InvariantCulture);

            var records = csv.GetRecords<T>();

            return records;
        }
    }
}
