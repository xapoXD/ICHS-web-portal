using System;
using System.Collections.Generic;

namespace IchsServer.Db
{
    public partial class IchsDataset
    {
        public int SubjectId { get; set; }
        public string Pohlavi { get; set; } = null!;
        public short RokNar { get; set; }
        public int Vaha { get; set; }
        public int Vyska { get; set; }
        public int Sys { get; set; }
        public int Dia { get; set; }
        public decimal Ldl { get; set; }
        public decimal Glykemie { get; set; }
        public string Region { get; set; } = null!;
        public bool Kouri { get; set; }
        public bool FyzLimit { get; set; }
        public bool Alkohol { get; set; }
        public bool OvoceZelenina { get; set; }
        public bool Stres { get; set; }


        


    }

}
