// See https://aka.ms/new-console-template for more information
using Algorithms.BetweenTwoSets;

var firstArray = new List<int>() { 2, 4 };
var secundArray = new List<int>() { 16, 32, 96 };
if (BetweenTwoSetsService.Validate(firstArray) && BetweenTwoSetsService.Validate(secundArray))
    Console.WriteLine(BetweenTwoSetsService.Start(firstArray, secundArray));

