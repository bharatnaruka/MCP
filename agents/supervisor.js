import { createPlan } from "./planner.js";
import { executePlan } from "./executor.js";
import { critique } from "./critic.js";

export async function multiAgentController(prompt) {
  const plan = await createPlan(prompt);
 
  console.log(plan)
  const result = await executePlan(plan, prompt);
  
  //const review = await critique(prompt, result);

  return result.format

  //console.log(result.format)
  //return {
    //plan,
    //result.
    //review
  //};
}