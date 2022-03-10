package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class UpdateUserSimulation extends Simulation{
  val httpConf = http.baseUrl("http://reqres.in")
    .header("Accept", value = "application.json")
    .header("content-type", value = "application/json")

  val scn = scenario("Update User Scenario")
    //update user
    .exec(http("Update specific user")
      .put("/api/users/2")
      .body(RawFileBody("./src/test/resources/bodies/UpdateUser.json")).asJson
      .check(status.in(200 to 201)))

    .pause(3)

    //delete user
    .exec(http("delete specific user")
      .delete("/api/users/2")
      .check(status.in(200 to 204)))

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
}
