document.getElementById("generateBtn").addEventListener("click", async () => {
   // 1. Load base.yaml
  const response = await fetch("preset_base_2v2.yaml");
  const yamlText = await response.text();

  // 2. Parse YAML -> JS object
  const config = jsyaml.load(yamlText);

  // 3. Randomize your fields
  const randomBool = () => Math.random() < 0.5;

  config.PrologueOpen      = randomBool();
  config.BlueHouseOpen     = randomBool();
  config.MtRuggedOpen      = randomBool();
  config.ForeverForestOpen = randomBool();
  config.ToyboxOpen        = randomBool();
  config.WhaleOpen         = randomBool();
  config.Ch7BridgeVisible  = randomBool();
  config.KentCKoopa        = randomBool() ? 0 : 2;

  // 4. Convert back to YAML
  const newYaml = jsyaml.dump(config);

  // 5. Download it
  const blob = new Blob([newYaml], { type: "text/yaml" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "pm64_2v2_seed_settings.yaml";
  link.click();
  alert("Button works!"); // remove this
});
