using System;

namespace omp.DataAccess.Core
{
    public static class Database
    {
        public static string MarketplaceConnectionString()
        {
            return @"Server=DESKTOP-25L2N1F\SQLEXPRESS;Database=MarketPlace;Trusted_Connection=True;";
        }
    }
}
