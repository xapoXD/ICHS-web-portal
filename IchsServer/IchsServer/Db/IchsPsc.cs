using System;
using System.Collections.Generic;

namespace IchsServer.Db
{
    public partial class IchsPsc
    {
        public int Id { get; set; }
        public int Psc { get; set; }
        public string Region { get; set; } = null!;
    }
}
