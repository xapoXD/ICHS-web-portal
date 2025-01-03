using IchsServer.Db;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IchsServer.Controllers
{
    public class IchsDatasetController : Controller
    {

        private readonly IchsDbContext _context;
        public IchsDatasetController(IchsDbContext context)
        {
            _context = context;
        }


        public IActionResult Index()
        {
            return View();
        }


        [HttpGet]
        [Route("Records")]
        public async Task<IEnumerable<IchsDataset>> Get()
        {
            /*
            IchsDataset newRecord = new IchsDataset();
            // "man", 2001, 69, 69, 160, 120, 5, 5, "CZ20", true, true, true, true, true
            newRecord.Pohlavi = "men";
            newRecord.RokNar = 2001;
            newRecord.Vaha = 69;
            newRecord.Vyska = 69;
            newRecord.Dia = 120;
            newRecord.Sys = 160;
            newRecord.Region = "HOVNOO00";
            newRecord.Stres = true;
            newRecord.Kouri = true;
            newRecord.Alkohol = true;
            newRecord.Ldl = 20;
            newRecord.Glykemie = 6;
            newRecord.FyzLimit = true;
            newRecord.OvoceZelenina = true;

            _context.IchsDatasets.Add(newRecord);
            _context.SaveChanges();
            */
            return await _context.IchsDatasets.ToListAsync();
        }






    }
}
