namespace IchsServer.Services
{
    using IchsServer.Models;
    using System;

    public class ScoreService
    {
        public int GetRiskScore(string gender, bool isSmoker, int age, int systolicBloodPressure, int cholesterol)
        {
            // Define min and max age boundaries
            int minAge = 40;
            int maxAge = 65;

            Console.WriteLine(RoundOff(cholesterol));
            // Clamp age within the defined boundaries
            if (age < minAge) age = minAge;
            if (age > maxAge) age = maxAge;

            if (ScoreMatrix.Matrix.TryGetValue(gender, out var smokingDict) &&
                smokingDict.TryGetValue(isSmoker, out var ageDict))
            {
                // Find the closest available age in the dictionary
                int closestAge = FindClosestKey(ageDict.Keys, age);

                if (ageDict.TryGetValue(closestAge, out var pressureDict) &&
                    pressureDict.TryGetValue(systolicBloodPressure, out var cholesterolDict) &&
                    cholesterolDict.TryGetValue(cholesterol, out var score))
                {
                    return score;
                }
            }

            return 0;
        }

        // Helper method to find the closest key in a sorted list
        private int FindClosestKey(IEnumerable<int> keys, int target)
        {
            return keys.OrderBy(k => Math.Abs(k - target)).First();
        }

        public static int RoundOff(int i)
        {
            return ((int)Math.Round(i / 10.0)) * 10;
        }
    }

}
