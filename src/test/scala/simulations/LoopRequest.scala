package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef._

class LoopRequest extends Simulation{

  val httpConf = http.baseUrl("http://reqres.in")
    .header("Accept", value = "application.json")
    .header("content-type", value = "application/json")

  def getAllUsersRequest(): ChainBuilder={
    repeat(2){
      exec(http("get all users request")
      .get("/api/users?page=2")
      .check(status.is(200)))
    }
  }

  def getOneUserRequest(): ChainBuilder={
    repeat(2){
      exec(http("get single user request")
        .get("/api/users/2")
        .check(status.is(200)))
    }
  }

  def addUsers(): ChainBuilder = {
    repeat(2){
      exec(http("add a user request")
      .post("/api/users")
      .body(RawFileBody("./src/test/resources/bodies/AddUser.json")).asJson
      .check(status.in(200 to 201)))
    }
  }


  val scn = scenario("user request scenario")
    .exec(getAllUsersRequest())
    .pause(2)
    .exec(getOneUserRequest())
    .pause(2)
    .exec(addUsers())

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
}
