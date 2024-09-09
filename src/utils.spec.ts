import utils from "./utils";

describe("utils.extractAccessToken", () => {
  it("returns null when data is null", () => {
    const data = null;
    const result = utils.extractAccessToken(data);

    expect(result).toBeNull();
  });

  it("returns null when data is not object", () => {
    const data = "bad_data";
    const result = utils.extractAccessToken(data);

    expect(result).toBeNull();
  });

  it("returns null when AuthenticationResult not in object", () => {
    const data = { bad: "data" };
    const result = utils.extractAccessToken(data);

    expect(result).toBeNull();
  });

  it("returns null when AuthenticationResult is null", () => {
    const data = { AuthenticationResult: null };
    const result = utils.extractAccessToken(data);

    expect(result).toBeNull();
  });

  it("returns null when AuthenticationResult is not object", () => {
    const data = { AuthenticationResult: "bad_result" };
    const result = utils.extractAccessToken(data);

    expect(result).toBeNull();
  });

  it("returns null when AccessToken not in AuthenticationResult", () => {
    const data = { AuthenticationResult: { bad: "result" } };
    const result = utils.extractAccessToken(data);

    expect(result).toBeNull();
  });

  it("returns null when AccessToken is null", () => {
    const data = { AuthenticationResult: { AccessToken: null } };
    const result = utils.extractAccessToken(data);

    expect(result).toBeNull();
  });

  it("returns null when AccessToken is not string", () => {
    const data = {
      AuthenticationResult: { AccessToken: { bad: "access_token" } },
    };
    const result = utils.extractAccessToken(data);

    expect(result).toBeNull();
  });

  it("returns AccessToken", () => {
    const expected = "good_access_token";
    const data = {
      AuthenticationResult: { AccessToken: expected },
    };
    const result = utils.extractAccessToken(data);

    expect(result).toBe(expected);
  });
});
