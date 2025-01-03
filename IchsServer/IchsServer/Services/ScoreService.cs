namespace IchsServer.Services
{
    using IchsServer.Models;
    using System;

    public class ScoreService
    {
        public int GetRiskScore(string gender, bool isSmoker, int age, int systolicBloodPressure, int cholesterol)
        {
            if (ScoreMatrix.Matrix.TryGetValue(gender, out var smokingDict) &&
                smokingDict.TryGetValue(isSmoker, out var ageDict) &&
                ageDict.TryGetValue(age, out var pressureDict) &&
                pressureDict.TryGetValue(systolicBloodPressure, out var cholesterolDict) &&
                cholesterolDict.TryGetValue(cholesterol, out var score))
            {
                return score;
            }

            throw new ArgumentException("Invalid input values.");
        }
    }

}
