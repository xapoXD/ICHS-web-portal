namespace IchsServer.Models
{
    using System.Collections.Generic;

    public static class ScoreMatrix
    {
        // Define the SCORE matrix
        // This example only includes partial data for brevity; you'll need to include all the data points.
        public static readonly Dictionary<string, Dictionary<bool, Dictionary<int, Dictionary<int, Dictionary<int, int>>>>> Matrix =
            new Dictionary<string, Dictionary<bool, Dictionary<int, Dictionary<int, Dictionary<int, int>>>>>
            {
            {
                "women", new Dictionary<bool, Dictionary<int, Dictionary<int, Dictionary<int, int>>>>
                {
                    {
                        false, new Dictionary<int, Dictionary<int, Dictionary<int, int>>>
                        {
                            {
                                65, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 7 }, { 5, 8 }, { 6, 9 }, { 7, 10 }, { 8, 12 } } },
                                    { 160, new Dictionary<int, int> { { 4, 5 }, { 5, 5 }, { 6, 6 }, { 7, 7 }, { 8, 8 } } },
                                    { 140, new Dictionary<int, int> { { 4, 3 }, { 5, 3 }, { 6, 4 }, { 7, 5 }, { 8, 6 } } },
                                    { 120, new Dictionary<int, int> { { 4, 2 }, { 5, 2 }, { 6, 3 }, { 7, 3 }, { 8, 4 } } },
                                }
                            },
                            {
                                60, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 4 }, { 5, 4 }, { 6, 5 }, { 7, 6 }, { 8, 7 } } },
                                    { 160, new Dictionary<int, int> { { 4, 3 }, { 5, 3 }, { 6, 3 }, { 7, 4 }, { 8, 5 } } },
                                    { 140, new Dictionary<int, int> { { 4, 2 }, { 5, 2 }, { 6, 2 }, { 7, 3 }, { 8, 3 } } },
                                    { 120, new Dictionary<int, int> { { 4, 1 }, { 5, 1 }, { 6, 1 }, { 7, 1 }, { 8, 1 } } },
                                }
                            },
                            {
                                55, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 2 }, { 5, 2 }, { 6, 3 }, { 7, 3 }, { 8, 4 } } },
                                    { 160, new Dictionary<int, int> { { 4, 1 }, { 5, 2 }, { 6, 2 }, { 7, 2 }, { 8, 3 } } },
                                    { 140, new Dictionary<int, int> { { 4, 1 }, { 5, 1 }, { 6, 1 }, { 7, 1 }, { 8, 2 } } },
                                    { 120, new Dictionary<int, int> { { 4, 1 }, { 5, 1 }, { 6, 1 }, { 7, 1 }, { 8, 1 } } },
                                }
                            },
                            {
                                50, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 1 }, { 5, 1 }, { 6, 1 }, { 7, 2 }, { 8, 2 } } },
                                    { 160, new Dictionary<int, int> { { 4, 1 }, { 5, 1 }, { 6, 1 }, { 7, 1 }, { 8, 1 } } },
                                    { 140, new Dictionary<int, int> { { 4, 0 }, { 5, 1 }, { 6, 1 }, { 7, 1 }, { 8, 1 } } },
                                    { 120, new Dictionary<int, int> { { 4, 0 }, { 5, 0 }, { 6, 1 }, { 7, 1 }, { 8, 1 } } },
                                }
                            },
                            {
                                40, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 0 }, { 5, 0 }, { 6, 0 }, { 7, 0 }, { 8, 0 } } },
                                    { 160, new Dictionary<int, int> { { 4, 0 }, { 5, 0 }, { 6, 0 }, { 7, 0 }, { 8, 0 } } },
                                    { 140, new Dictionary<int, int> { { 4, 0 }, { 5, 0 }, { 6, 0 }, { 7, 0 }, { 8, 0 } } },
                                    { 120, new Dictionary<int, int> { { 4, 0 }, { 5, 0 }, { 6, 0 }, { 7, 0 }, { 8, 0 } } },
                                }
                            },
                        }
                    },
                    {
                        true, new Dictionary<int, Dictionary<int, Dictionary<int, int>>>
                        {
                            {
                                65, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 13 }, { 5, 15 }, { 6, 17 }, { 7, 19 }, { 8, 22 } } },
                                    { 160, new Dictionary<int, int> { { 4, 9 }, { 5, 10 }, { 6, 12 }, { 7, 13 }, { 8, 16 } } },
                                    { 140, new Dictionary<int, int> { { 4, 6 }, { 5, 7 }, { 6, 8 }, { 7, 9 }, { 8, 11 } } },
                                    { 120, new Dictionary<int, int> { { 4, 4 }, { 5, 5 }, { 6, 5 }, { 7, 6 }, { 8, 7 } } },
                                }
                            },
                            {
                                60, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 8 }, { 5, 9 }, { 6, 10 }, { 7, 11 }, { 8, 13 } } },
                                    { 160, new Dictionary<int, int> { { 4, 5 }, { 5, 6 }, { 6, 7 }, { 7, 8 }, { 8, 9 } } },
                                    { 140, new Dictionary<int, int> { { 4, 3 }, { 5, 4 }, { 6, 5 }, { 7, 5 }, { 8, 6 } } },
                                    { 120, new Dictionary<int, int> { { 4, 2 }, { 5, 3 }, { 6, 3 }, { 7, 4 }, { 8, 4 } } },
                                }
                            },
                            {
                                55, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 4 }, { 5, 5 }, { 6, 5 }, { 7, 6 }, { 8, 7 } } },
                                    { 160, new Dictionary<int, int> { { 4, 3 }, { 5, 3 }, { 6, 4 }, { 7, 4 }, { 8, 5 } } },
                                    { 140, new Dictionary<int, int> { { 4, 2 }, { 5, 2 }, { 6, 2 }, { 7, 3 }, { 8, 3 } } },
                                    { 120, new Dictionary<int, int> { { 4, 1 }, { 5, 1 }, { 6, 2 }, { 7, 2 }, { 8, 2 } } },
                                }
                            },
                            {
                                50, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 2 }, { 5, 2 }, { 6, 3 }, { 7, 3 }, { 8, 4 } } },
                                    { 160, new Dictionary<int, int> { { 4, 1 }, { 5, 2 }, { 6, 2 }, { 7, 2 }, { 8, 3 } } },
                                    { 140, new Dictionary<int, int> { { 4, 1 }, { 5, 1 }, { 6, 1 }, { 7, 1 }, { 8, 2 } } },
                                    { 120, new Dictionary<int, int> { { 4, 1 }, { 5, 1 }, { 6, 1 }, { 7, 1 }, { 8, 1 } } },
                                }
                            },
                            {
                                40, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 0 }, { 5, 0 }, { 6, 0 }, { 7, 1 }, { 8, 1 } } },
                                    { 160, new Dictionary<int, int> { { 4, 0 }, { 5, 0 }, { 6, 0 }, { 7, 0 }, { 8, 0 } } },
                                    { 140, new Dictionary<int, int> { { 4, 0 }, { 5, 0 }, { 6, 0 }, { 7, 0 }, { 8, 0 } } },
                                    { 120, new Dictionary<int, int> { { 4, 0 }, { 5, 0 }, { 6, 0 }, { 7, 0 }, { 8, 0 } } },
                                }
                            },
                        }
                    }
                }
            },

            {
                "men", new Dictionary<bool, Dictionary<int, Dictionary<int, Dictionary<int, int>>>>
                {
                    {
                        false, new Dictionary<int, Dictionary<int, Dictionary<int, int>>>
                        {
                            {
                                65, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 14 }, { 5, 16 }, { 6, 19 }, { 7, 22 }, { 8, 26 } } },
                                    { 160, new Dictionary<int, int> { { 4, 9 }, { 5, 11 }, { 6,13 }, { 7, 15 }, { 8, 16 } } },
                                    { 140, new Dictionary<int, int> { { 4, 6 }, { 5, 8 }, { 6, 9 }, { 7, 11 }, { 8, 13 } } },
                                    { 120, new Dictionary<int, int> { { 4, 4 }, { 5, 5 }, { 6, 6 }, { 7, 7 }, { 8, 9 } } },
                                }
                            },
                            {
                                60, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 9 }, { 5, 11 }, { 6, 13 }, { 7, 15 }, { 8, 18 } } },
                                    { 160, new Dictionary<int, int> { { 4, 6 }, { 5, 7 }, { 6, 9 }, { 7, 10 }, { 8, 12 } } },
                                    { 140, new Dictionary<int, int> { { 4, 4 }, { 5, 5 }, { 6, 6 }, { 7, 7 }, { 8, 9 } } },
                                    { 120, new Dictionary<int, int> { { 4, 3 }, { 5, 3 }, { 6, 4 }, { 7, 5 }, { 8, 6 } } },
                                }
                            },
                            {
                                55, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 6 }, { 5, 7 }, { 6, 8 }, { 7, 10 }, { 8, 12 } } },
                                    { 160, new Dictionary<int, int> { { 4, 4 }, { 5, 5 }, { 6, 6 }, { 7, 7 }, { 8, 8 } } },
                                    { 140, new Dictionary<int, int> { { 4, 3 }, { 5, 3 }, { 6, 4 }, { 7, 5 }, { 8, 6 } } },
                                    { 120, new Dictionary<int, int> { { 4, 2 }, { 5, 2 }, { 6, 3 }, { 7, 3 }, { 8, 4 } } },
                                }
                            },
                            {
                                50, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 4 }, { 5, 4 }, { 6, 5 }, { 7, 6 }, { 8, 7 } } },
                                    { 160, new Dictionary<int, int> { { 4, 2 }, { 5, 3 }, { 6, 3 }, { 7, 4 }, { 8, 5 } } },
                                    { 140, new Dictionary<int, int> { { 4, 2 }, { 5, 2 }, { 6, 2 }, { 7, 3 }, { 8, 3 } } },
                                    { 120, new Dictionary<int, int> { { 4, 1 }, { 5, 1 }, { 6, 2 }, { 7, 2 }, { 8, 2 } } },
                                }
                            },
                            {
                                40, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 1 }, { 5, 1 }, { 6, 1 }, { 7, 2 }, { 8, 2 } } },
                                    { 160, new Dictionary<int, int> { { 4, 1 }, { 5, 1 }, { 6, 1 }, { 7, 1 }, { 8, 1 } } },
                                    { 140, new Dictionary<int, int> { { 4, 0 }, { 5, 1 }, { 6, 1 }, { 7, 1 }, { 8, 1 } } },
                                    { 120, new Dictionary<int, int> { { 4, 0 }, { 5, 0 }, { 6, 1 }, { 7, 1 }, { 8, 1 } } },
                                }
                            },
                        }
                    },
                    {
                        true, new Dictionary<int, Dictionary<int, Dictionary<int, int>>>
                        {
                            {
                                65, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 26 }, { 5, 30 }, { 6, 35 }, { 7, 41 }, { 8, 47 } } },
                                    { 160, new Dictionary<int, int> { { 4, 18 }, { 5, 21 }, { 6, 25 }, { 7, 29 }, { 8, 34 } } },
                                    { 140, new Dictionary<int, int> { { 4, 13 }, { 5, 15 }, { 6, 17 }, { 7, 20 }, { 8, 24 } } },
                                    { 120, new Dictionary<int, int> { { 4, 9 }, { 5, 10 }, { 6, 12 }, { 7, 14 }, { 8, 17 } } },
                                }
                            },
                            {
                                60, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 18 }, { 5, 21 }, { 6, 24 }, { 7, 28 }, { 8, 33 } } },
                                    { 160, new Dictionary<int, int> { { 4, 12 }, { 5, 14 }, { 6, 17 }, { 7, 20 }, { 8, 24 } } },
                                    { 140, new Dictionary<int, int> { { 4, 8 }, { 5, 10 }, { 6, 12 }, { 7, 14 }, { 8, 17 } } },
                                    { 120, new Dictionary<int, int> { { 4, 6 }, { 5, 7 }, { 6, 8 }, { 7, 10 }, { 8, 12 } } },
                                }
                            },
                            {
                                55, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 12 }, { 5, 13 }, { 6, 16 }, { 7, 19 }, { 8, 22 } } },
                                    { 160, new Dictionary<int, int> { { 4, 8 }, { 5, 9 }, { 6, 11 }, { 7, 13 }, { 8, 16 } } },
                                    { 140, new Dictionary<int, int> { { 4, 5 }, { 5, 6 }, { 6, 8 }, { 7, 9 }, { 8, 11 } } },
                                    { 120, new Dictionary<int, int> { { 4, 4 }, { 5, 4 }, { 6, 5 }, { 7, 6 }, { 8, 8 } } },
                                }
                            },
                            {
                                50, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 7 }, { 5, 8 }, { 6, 10 }, { 7, 12 }, { 8, 14 } } },
                                    { 160, new Dictionary<int, int> { { 4, 5 }, { 5, 6 }, { 6, 7 }, { 7, 8 }, { 8, 10 } } },
                                    { 140, new Dictionary<int, int> { { 4, 3 }, { 5, 4 }, { 6, 5 }, { 7, 6 }, { 8, 7 } } },
                                    { 120, new Dictionary<int, int> { { 4, 2 }, { 5, 3 }, { 6, 3 }, { 7, 4 }, { 8, 5 } } },
                                }
                            },
                            {
                                40, new Dictionary<int, Dictionary<int, int>>
                                {
                                    { 180, new Dictionary<int, int> { { 4, 2 }, { 5, 2 }, { 6, 3 }, { 7, 3 }, { 8, 4 } } },
                                    { 160, new Dictionary<int, int> { { 4, 1 }, { 5, 2 }, { 6, 2 }, { 7, 2 }, { 8, 3 } } },
                                    { 140, new Dictionary<int, int> { { 4, 1 }, { 5, 1 }, { 6, 1 }, { 7, 2 }, { 8, 2 } } },
                                    { 120, new Dictionary<int, int> { { 4, 1 }, { 5, 1 }, { 6, 1 }, { 7, 1 }, { 8, 1 } } },
                                }
                            },
                        }
                    }
                }
            }
            };
    }

}
