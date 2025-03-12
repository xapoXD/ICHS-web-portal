using IchsServer.Models;
using Microsoft.AspNetCore.Mvc;
using Hl7.Fhir.Model;
using Hl7.Fhir.Rest;
using Hl7.Fhir.Serialization;
using IchsServer.Services;
using IchsServer.Db;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Microsoft.AspNetCore.Authentication;
using System.Globalization;


namespace IchsServer.Controllers
{
    public class DotaznikController : Controller
    {


        private readonly ICSVService _csvService;
        private readonly IchsDbContext _context;

        public DotaznikController(ICSVService csvService, ScoreService scoreService, IchsDbContext context)
        {
            _csvService = csvService;
            _scoreService = scoreService;
            _context = context;
        }



        public IActionResult Index()
        {
            
            return View();
   
        }


        [HttpPost]
        [Route("DotaznikCompute")]
        public async Task<IActionResult> DotaznikCompute([FromBody] Dotaznik data) //public async Task<IActionResult>
        {


            if (data == null)
            {
                Console.WriteLine("data je null");
                return BadRequest("Data is null");

            }

            Console.WriteLine("Data recieved from frontedn:");
            Console.WriteLine(data.Name);
            Console.WriteLine(data.LastName);
            Console.WriteLine(data.DateOfBirth);
            Console.WriteLine(data.Weight);
            Console.WriteLine(data.Height);
            Console.WriteLine(data.Sugar);
            Console.WriteLine(data.Cholesterol);


            Console.WriteLine(data.AddressCity);
            Console.WriteLine(data.AddressPostalCode);
            Console.WriteLine(data.AddressCountry);
            Console.WriteLine(data.AddressStreetNum);

            Console.WriteLine(data.PressureDias);
            Console.WriteLine(data.PressureSys);


            Console.WriteLine(data.PhysicalActivity);
            Console.WriteLine(data.Smoking);
            Console.WriteLine(data.Alcohol);
            Console.WriteLine(data.VegieFruit);
            Console.WriteLine(data.Stress);


            Console.WriteLine("GENDER: " + data.Gender);


            /*
            // 2. Validate data fields

    if (string.IsNullOrWhiteSpace(data.Name) || 
        string.IsNullOrWhiteSpace(data.LastName) ||
        data.DateOfBirth == default ||
        data.Weight <= 0 || 
        data.Height <= 0)
    {
        return BadRequest("Invalid data provided");
    }

            */



            //   var client = new FhirClient("http://localhost:4080/"); // TODO: custom url to send the data


            Bundle bundle = new Bundle();
            bundle.Type = Bundle.BundleType.Collection;


            //Patient
            Guid gg = Guid.NewGuid();
            string? dateOfBirth = Convert.ToDateTime(data.DateOfBirth).ToString("yyyy-MM-dd");

            var patient = new Patient() 
            {
                Id = gg.ToString(),
                Name = new List<HumanName>()
                {
                    new HumanName()
                    {
                        Given = new List<string?> { data.Name },
                        Family = data.LastName
                    }
                },
                BirthDate = dateOfBirth,
                Address = new List<Address>()
                {
                    new Address()
                    {
                        Line = new string[] { data.AddressStreetNum },
                        City = data.AddressCity,
                        PostalCode = data.AddressPostalCode,
                        Country = data.AddressCountry
                    }
                }


            };

            var first_entry = new Bundle.EntryComponent();
            // first_entry.FullUrl = patient.ResourceBase.ToString() + patient.GetType().ToString() + patient.Id;
            first_entry.Resource = patient;
            bundle.Entry.Add(first_entry);

            // Weight
            var weight = new Observation()
            {
                Value = new Quantity((decimal)Convert.ToDecimal(data.Weight), "kg"),

                Code = new CodeableConcept()
                {
                    Coding = new List<Coding>
                    {
                        new Coding
                        {
                            Display = "Body Weight"
                        }
                    }
                },
                Status = new ObservationStatus { },
                Subject = new ResourceReference
                {
                    Reference = "Patient?Id:exact=" + patient.Id.ToString()
                },
            };

            var second_entry = new Bundle.EntryComponent();
            //  second_entry.FullUrl = weight.ResourceBase.ToString() + weight.GetType().ToString() + weight.Id;
            second_entry.Resource = weight;
            bundle.Entry.Add(second_entry);


            // Height
            var height = new Observation()
            {
                Value = new Quantity(Convert.ToInt32(data.Height), "cm"),

                Code = new CodeableConcept()
                {
                    Coding = new List<Coding>
                    {
                        new Coding
                        {
                            Display = "Body Height"
                        }
                    }
                },
                Status = new ObservationStatus { },
                Subject = new ResourceReference()
                {
                    Reference = "Patient?Id:exact=" + patient.Id.ToString()
                },
            };

            var third_entry = new Bundle.EntryComponent();
            //   third_entry.FullUrl = height.ResourceBase.ToString() + height.GetType().ToString() + height.Id;
            third_entry.Resource = height;
            bundle.Entry.Add(third_entry);


            //BMI
            double bmi = (data.Weight / ((data.Height) * (data.Height)));
            bmi = Convert.ToInt32(bmi);
            var BMI = new Observation()
            {
                Value = new Quantity((decimal)bmi, ""),
                Code = new CodeableConcept()
                {
                    Coding = new List<Coding>
                    {
                        new Coding
                        {
                            Display = "BMI",
                            Code = "60621009",
                            System = "http://snomed.info/sct",
                        }
                    }
                },
                Status = new ObservationStatus { },
                Subject = new ResourceReference()
                {
                    Reference = "Patient?Id:exact=" + patient.Id.ToString()
                },
            };

            var forth_entry = new Bundle.EntryComponent();
            //     forth_entry.FullUrl = BMI.ResourceBase.ToString() + BMI.GetType().ToString() + BMI.Id;
            forth_entry.Resource = BMI;
            bundle.Entry.Add(forth_entry);


            // Sugar
            string StrSugar = data.Sugar;
            int Sugar;
            bool isParsablesug = Int32.TryParse(StrSugar, out Sugar);
            if (isParsablesug)
                Console.WriteLine(Sugar);
            else
                Console.WriteLine("Sugar Could not be parsed.");

            var sugar = new Observation()
            {
                Value = new Quantity(Sugar, "mmol/l"),
                Code = new CodeableConcept()
                {
                    Coding = new List<Coding>
                    {
                        new Coding
                        {
                            Display = "Hladina cukru v krvi",
                            Code = "33747003",
                            System = "http://snomed.info/sct",
                        }
                    }
                },
                Status = new ObservationStatus { },
                Subject = new ResourceReference()
                {
                    Reference = "Patient?Id:exact=" + patient.Id.ToString()
                },
            };

            var fifth_entry = new Bundle.EntryComponent();
            //   fifth_entry.FullUrl = sugar.ResourceBase.ToString() + sugar.GetType().ToString() + sugar.Id;
            fifth_entry.Resource = sugar;
            bundle.Entry.Add(fifth_entry);

            // Cholesterol
            string StrCholesterol = data.Cholesterol.Replace(".", ",");
            decimal Cholesterol;

            bool isParsableChol = Int32.TryParse(StrCholesterol, out int CholesterolInt);
            if (isParsableChol)
            {
                Cholesterol = CholesterolInt; // Store as decimal
            }
            // If parsing as int fails, try parsing as a decimal
            else if (Decimal.TryParse(StrCholesterol, NumberStyles.Any, CultureInfo.InvariantCulture, out decimal CholesterolDecimal))
            {
                Cholesterol = CholesterolDecimal;
            }
            else
            {
                Console.WriteLine("Could not parse cholesterol to a valid number.");
                Cholesterol = 0;
            }


            var LDLCholesterol = new Observation()
            {
                Value = new Quantity(Cholesterol, "mmol/l"),
                Code = new CodeableConcept()
                {
                    Coding = new List<Coding>
                    {
                        new Coding
                        {
                            Display = "Hladina LDL cholesterolu",
                            Code = "84698008",
                            System = "http://snomed.info/sct",
                        }
                    }
                },
                Status = new ObservationStatus { },
                Subject = new ResourceReference()
                {
                    Reference = "Patient?Id:exact=" + patient.Id.ToString()
                },
            };

            var sixth_entry = new Bundle.EntryComponent();
            //     sixth_entry.FullUrl = LDLCholesterol.ResourceBase.ToString() + LDLCholesterol.GetType().ToString() + LDLCholesterol.Id;
            sixth_entry.Resource = LDLCholesterol;
            bundle.Entry.Add(sixth_entry);



            //Pressure
            string diaStr = data.PressureDias;
            int Diastolic;

            bool isParsable = Int32.TryParse(diaStr, out Diastolic);

            if (isParsable)
                Console.WriteLine(Diastolic);
            else
                Console.WriteLine("Diastolic Could not be parsed.");



            string numberStr = data.PressureSys;
            int Systolic;

            bool isParsable2 = Int32.TryParse(numberStr, out Systolic);

            if (isParsable2)
                Console.WriteLine(Systolic);
            else
                Console.WriteLine("Systolic Could not be parsed.");



            var Pressure = new Observation()
            {
                Code = new CodeableConcept()
                {
                    Coding = new List<Coding>
                    {
                        new Coding
                        {
                            Display = "Krevní tlak",
                        }
                    }
                },

                Component = new List<Observation.ComponentComponent>()
                {

                   new Observation.ComponentComponent()
                   {

                       Code = new CodeableConcept(){

                           Coding = new List<Coding> {

                               new Coding
                               {
                                        Display = "Systolický tlak",
                                        Code = "271649006",
                                        System = "http://snomed.info/sct",
                               },

                           },

                       },

                       Value = new Quantity(Systolic, "mmHg"),

                   },

                   new Observation.ComponentComponent()
                   {

                       Code = new CodeableConcept(){

                           Coding = new List<Coding> {

                               new Coding
                               {
                                        Display = "Diastolický tlak",
                                        Code = "271650006",
                                        System = "http://snomed.info/sct",
                               },

                           },

                       },

                       Value = new Quantity(Diastolic, "mmHg"),

                   },

                },


                Status = new ObservationStatus { },
                Subject = new ResourceReference()
                {
                    Reference = "Patient/" + patient.Id
                },
            };

            var seventh_entry = new Bundle.EntryComponent();
            //    seventh_entry.FullUrl = Pressure.ResourceBase.ToString() + Pressure.GetType().ToString() + Pressure.Id;
            seventh_entry.Resource = Pressure;
            bundle.Entry.Add(seventh_entry);

            //send as a bundle to fihr server
            //client.Create(bundle);

            var riskFactorsResponce = new RiskFactorResponse();

            if (bmi >= 30) {
                riskFactorsResponce.obesityF = true;
            }
            else {
                riskFactorsResponce.obesityF = false;
            }
            riskFactorsResponce.physicalF = data.PhysicalActivity;
            riskFactorsResponce.smokingF = data.Smoking;
            riskFactorsResponce.alcoholF = data.Alcohol;

            if (Systolic >= 140 || Diastolic >= 90)
            {
                riskFactorsResponce.hypertenseF = true;
            } else
            {
                riskFactorsResponce.hypertenseF = false;
            }

            riskFactorsResponce.vegieAndFruitF = data.VegieFruit;
            riskFactorsResponce.psychosocialF = data.Stress;

            if (Sugar >= 7)
            {
                riskFactorsResponce.diabetesF = true;
            }
            else { riskFactorsResponce.diabetesF = false;}
            


            if(Cholesterol <= 3) { riskFactorsResponce.dyslipidemicF = true; } 
            else { riskFactorsResponce.dyslipidemicF = false; }

            // should chech the value in Gender either men or women

            if(Cholesterol >= 8)
            {
                Cholesterol = 8;
            }
            if(Cholesterol <= 4)
            {
                Cholesterol = 4;
            }
           
            // count age 
            var today = DateTime.Today;
            var age = today.Year - data.DateOfBirth.Year;
            // Go back to the year in which the person was born in case of a leap year
            if (data.DateOfBirth.Date > today.AddYears(-age)) age--;

            int score = GetRiskScore(data.Gender, riskFactorsResponce.smokingF, RoundOff(age), FindClosestNumber(Systolic), (int)Math.Round(Cholesterol, MidpointRounding.AwayFromZero));
            riskFactorsResponce.score = score;


            // SAVE DATA TO DB
            // IchsDataset newRecord = new IchsDataset("man", 2001, 69, 69, 160, 120, 5, 5, "CZ20", true, true, true, true, true);
            // _context.IchsDatasets.Add(newRecord);
            // _context.SaveChanges();

            return Ok(Json(riskFactorsResponce));
        }




        [HttpPost]
        [Route("FactorCompute")]
        public async Task<IActionResult> FactorCompute([FromBody] string[] Factors)
        {
            var filterDictionary = new Dictionary<string, Func<IchsDataset, bool>>
            {
                { "diabetesF", record => record.Glykemie < 7 },
                { "obesityF", record => record.Vaha / ((record.Vyska / 100) * (record.Vyska / 100)) < 30 },
                { "hypertenseF", record => (record.Sys < 140 && record.Dia < 90) },
                { "dyslipidemicF", record => record.Ldl > 3 },
                { "alcoholF", record => record.Alkohol == false },
                { "vegieAndFruitF", record => record.OvoceZelenina == true },
                { "psychologicalF", record => record.Stres == false },
                { "smokingF", record => record.Kouri == false },
                { "physicalF", record => record.FyzLimit == true },
            };

            // Retrieve the records from the database
            var records = await _context.IchsDatasets.ToListAsync();

            // Apply the filters dynamically based on the provided factors
            var filteredRecords = records.AsEnumerable(); // Convert the list to IEnumerable for LINQ operations
            foreach (var factor in Factors)
            {
                if (filterDictionary.TryGetValue(factor, out var filterFunc))
                {
                    filteredRecords = filteredRecords.Where(filterFunc).ToList();
                }
            }

            // Preventing divide by zero error by checking if totalRecords is greater than 0
            var totalRecords = records.Count;
            if (totalRecords == 0)
            {
                return Ok(new
                {
                    TotalRecords = 0,
                    TotalFilteredRecords = 0,
                    OverallPercentage = 0,
                    RegionSummary = new List<RegionSummary>()
                });
            }


            var totalFilteredRecords = filteredRecords.Count();
            var overallPercentage = (double)totalFilteredRecords / totalRecords * 100;

            var regionGroups = records.GroupBy(record => record.Region)
                                      .Select(group =>
                                      {
                                          var regionRecords = group.ToList();
                                          var regionFilteredRecords = regionRecords.Where(record =>
                                          {
                                              foreach (var factor in Factors)
                                              {
                                                  if (filterDictionary.TryGetValue(factor, out var filterFunc))
                                                  {
                                                      if (!filterFunc(record)) return false;
                                                  }
                                              }
                                              return true;
                                          }).ToList();

                                          // Check to prevent divide by zero
                                          var regionTotalCount = regionRecords.Count;
                                          var regionFilteredCount = regionFilteredRecords.Count;

                                          double percentage = regionTotalCount > 0 ?
                                              (double)regionFilteredCount / regionTotalCount * 100 : 0;

                                          bool active = percentage > overallPercentage;

                                          return new RegionSummary
                                          {
                                              Region = group.Key,
                                              TotalCount = regionTotalCount,
                                              FilteredCount = regionFilteredCount,
                                              Percentage = percentage,
                                              IsActive = active
                                          };
                                      }).ToList();

            // Handle floating-point values
            overallPercentage = HandleSpecialDoubleValue(overallPercentage);
            foreach (var group in regionGroups)
            {
                group.Percentage = HandleSpecialDoubleValue(group.Percentage);
            }

            var summaryResult = new
            {
                TotalRecords = totalRecords,
                TotalFilteredRecords = totalFilteredRecords,
                OverallPercentage = overallPercentage,
                RegionSummary = regionGroups
            };

            return Ok(summaryResult);
        }

        

        // ["vegieAndFruitF", "hypertenseF", "physicalF"]
        [HttpPost]
        [Route("TableFactorCompute")]
        public async Task<IActionResult> TableFactorCompute([FromBody] string[] Factors)
        {
            Console.WriteLine("jsemtu homosex");


            var filterDictionary = new Dictionary<string, Func<IchsDataset, bool>>
            {
                { "diabetesF", record => record.Glykemie < 7 },
                { "obesityF", record => record.Vaha / ((record.Vyska / 100) * (record.Vyska / 100)) < 30 },
                { "hypertenseF", record => (record.Sys < 140 && record.Dia < 90) },
                { "dyslipidemicF", record => record.Ldl > 3 },
                { "alcoholF", record => record.Alkohol == false },
                { "vegieAndFruitF", record => record.OvoceZelenina == true },
                { "psychologicalF", record => record.Stres == false },
                { "smokingF", record => record.Kouri == false },
                { "physicalF", record => record.FyzLimit == true },
            };

            // Retrieve the records from the database
            var records = await _context.IchsDatasets.ToListAsync();

            var totalRecords = records.Count;
            if (totalRecords == 0)
            {
                return Ok(new
                {
                    TotalRecords = 0,
                    StepwiseFilteredData = new List<object>()
                });
            }

            var stepwiseFilteredData = new List<object>();
            var currentFilteredRecords = records.AsEnumerable();
            int previousFilteredCount = totalRecords; // Initial count is the total records

            foreach (var factor in Factors)
            {
                if (filterDictionary.TryGetValue(factor, out var filterFunc))
                {
                    currentFilteredRecords = currentFilteredRecords.Where(filterFunc).ToList();

                    var currentFilteredCount = currentFilteredRecords.Count();

                    // Calculate the percentage based on the previous step's filtered count
                    double overallPercentage = previousFilteredCount > 0 ?
                        (double)currentFilteredCount / previousFilteredCount * 100 : 0;

                    // Prepare the region summaries for the current filter step
                    var regionGroups = currentFilteredRecords.GroupBy(record => record.Region)
                        .Select(group =>
                        {
                            var regionRecords = group.ToList();
                            var filteredCount = regionRecords.Count;
                            var totalCount = records.Where(r => r.Region == group.Key).Count(); // Total records for this region

                            // Calculate percentage for the region based on total records
                            double percentage = totalCount > 0 ?
                                (double)filteredCount / totalCount * 100 : 0;

                            return new
                            {
                                Region = group.Key,
                                FilteredCount = filteredCount,
                                TotalCount = totalCount,
                                Percentage = HandleSpecialDoubleValue(percentage)
                            };
                        }).ToList();

                    // Save the current step's results
                    stepwiseFilteredData.Add(new
                    {
                        AppliedFilter = factor,
                        TotalFilteredRecords = currentFilteredCount,
                        OverallPercentage = HandleSpecialDoubleValue(overallPercentage),
                        RegionSummary = regionGroups
                    });

                    // Update the previousFilteredCount for the next iteration
                    previousFilteredCount = currentFilteredCount;
                }
            }

            return Ok(new
            {
                TotalRecords = totalRecords,
                StepwiseFilteredData = stepwiseFilteredData
            });
        }









        private double HandleSpecialDoubleValue(double value)
        {
            if (double.IsInfinity(value) || double.IsNaN(value))
            {
                return 0;
            }
            return value;
        }


        private readonly ScoreService _scoreService;

        public int GetRiskScore(string gender, bool isSmoker, int age, int systolicBloodPressure, int cholesterol)
        {
            try
            {
                var score = _scoreService.GetRiskScore(gender, isSmoker, age, systolicBloodPressure, cholesterol);
                return (score);
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine(ex.Message);
                return 0;
            }
        }

        public static int RoundOff(int i)
        {
            return ((int)Math.Round(i / 10.0)) * 10;
        }

        static int FindClosestNumber(int userInput)
        {
            // Start with the first number in the array as the closest
            int[] targets = { 120, 140, 160, 180 };
            int closest = targets[0];

            // Loop through the array to find the closest number
            foreach (int target in targets)
            {
                // If the current target is closer to the input than the previous closest, update closest
                if (Math.Abs(userInput - target) < Math.Abs(userInput - closest))
                {
                    closest = target;
                }
            }

            return closest;
        }


    }

}
