// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}



pAqueorFactory = (number, baseArray) =>{
  if (typeof(number) == 'number') {

  const pAqueor = {
    specimen: number,
    dna: baseArray,
    mutate() {
      let mutatedBase = Math.floor(Math.random()*15);
      let newBase = returnRandBase();
      while (newBase == this.dna[mutatedBase]) {
        newBase = returnRandBase();
      }
      this.dna[mutatedBase] = newBase;
    },
    compareDNA(object) {
      let oldDNA = object.dna;
      let currentDNA = this.dna;
      let dnaMatches = 0
      for (i=0; i< this.dna.length; i++) {
        if (object.dna[i] == this.dna[i]) {
          dnaMatches ++;
          console.log(dnaMatches)
        }}
      const percInCommon = (dnaMatches/this.dna.length) * 100
      return `Specimens ${object.specimen} and ${this.specimen} have ${percInCommon}% of their DNA in Common.`;
    },
    willLikelySurvive(){
      let cgTotal = 0
      for(i=0; i<this.dna.length;i++) {
        if(this.dna[i] == 'C' || this.dna[i] == 'G') {
          cgTotal ++
        }
      }
    const survLikely = (cgTotal/this.dna.length) * 100
    return (survLikely >= 60);
    }
  }

  return pAqueor;

  } else {
    return 'invalid specimen number. Please input a number.'
  }
};

const specNums = [];
let successes = 0;
successfulSpecimens = []

for (n=345; n<375; n++){ /* Creating specimen numbers */
  specNums.push(n);
  }

for (i=0;i<specNums.length;i++){
  while (successfulSpecimens.length < 29){
    let temp_object = pAqueorFactory(specNums[i],mockUpStrand())
    if (temp_object.willLikelySurvive()){
      successfulSpecimens.push(temp_object);
    }
  }
};

console.log(successFulSpecimens)
