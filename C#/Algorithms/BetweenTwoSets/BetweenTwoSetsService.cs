namespace Algorithms.BetweenTwoSets
{
    public static class BetweenTwoSetsService
    {
        public static int Start(List<int> firstArray, List<int> secundArray)
        {
            var arrayBetween = new List<int>();
            var arrayBetweenTotal = new List<int>();

            for (var i = 1; i <= 100; i++)
            {
                var countFirstArray = 0;
                countFirstArray = CheckIfDivisionHasModZero(firstArray, i, countFirstArray);
                if (countFirstArray == firstArray.Count)
                    arrayBetween.Add(i);
            }

            foreach (var item in arrayBetween)
            {
                var countBetween = 0;
                foreach (var number in secundArray)
                {
                    if (number % item == 0)
                    {
                        countBetween++;
                    }
                }
                if (countBetween == secundArray.Count())
                    arrayBetweenTotal.Add(item);
            }
            return arrayBetweenTotal.Count;
        }

        private static int CheckIfDivisionHasModZero(List<int> firstArray, int i, int countFirstArray)
        {
            if (i % firstArray[0] == 0)
            {
                countFirstArray++;
                for (var number = 1; number < firstArray.Count; number++)
                {
                    if (i % firstArray[number] != 0)
                        continue;
                    countFirstArray++;
                }
            }

            return countFirstArray;
        }

        //Metodo criado para validar as Constraints do HackerRank
        public static bool Validate(List<int> a)
        {
            if (a.Count > 10) return false;
            foreach (var number in a)
            {
                if (number < 1 || number > 100) return false;
            }
            return true;
        }
    }
}
