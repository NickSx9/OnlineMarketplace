namespace OnlineMarketplace.Model
{
    public class Registration
    {
        public string Title { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string EmailAddress { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string CompanyName { get; set; }
        public string CompanyEmail { get; set; }
        public CompanyAddress CompanyAddress { get; set; }
        public string SubscriptionType { get; set; }
    }

    public class CompanyAddress
    {
        public string AddressLineOne { get; set; }
        public string AddressLineTwo { get; set; }
        public string TownCity { get; set; }
        public string Postcode { get; set; }
    }
}

