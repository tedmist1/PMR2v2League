document.getElementById("generateBtn").addEventListener("click", async () => {
  // 1. Load base.yaml
  // 2. Parse YAML
  // 3. Randomize specific settings
  // 4. Convert back to YAML
  // 5. Trigger download
});


const randomBool = () => Math.random() < 0.5;

const randomizeSettings = (config) => {
  config.PrologueOpen      = randomBool();
  config.BlueHouseOpen     = randomBool();
  config.MtRuggedOpen      = randomBool();
  config.ForeverForestOpen = randomBool();
  config.ToyboxOpen        = randomBool();
  config.WhaleOpen         = randomBool();
  config.Ch7BridgeVisible  = randomBool();
};