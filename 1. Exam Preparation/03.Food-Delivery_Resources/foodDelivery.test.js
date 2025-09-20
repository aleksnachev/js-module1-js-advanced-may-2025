import { foodDelivery } from "./foodDelivery";
import {expect} from "chai"

describe("foodDelivery Tests", function () {

  describe("getCategory()", function () {
    it("should return correct messages for valid categories", function () {
      expect(foodDelivery.getCategory("Vegan")).to.equal("Dishes that contain no animal products.");
      expect(foodDelivery.getCategory("Vegetarian")).to.equal("Dishes that contain no meat or fish.");
      expect(foodDelivery.getCategory("Gluten-Free")).to.equal("Dishes that contain no gluten.");
      expect(foodDelivery.getCategory("All")).to.equal("All available dishes.");
    });

    it("should throw error for invalid category", function () {
      expect(() => foodDelivery.getCategory("Meat")).to.throw("Invalid Category!");
      expect(() => foodDelivery.getCategory("")).to.throw("Invalid Category!");
    });
  });

  describe("addMenuItem()", function () {
    it("should add only items under or equal to maxPrice", function () {
      const items = [
        { name: "Salad", price: 6 },
        { name: "Soup", price: 4 },
        { name: "Burger", price: 8 },
      ];
      expect(foodDelivery.addMenuItem(items, 6)).to.equal("There are 2 available menu items matching your criteria!");
    });

    it("should return 0 if no item matches", function () {
      const items = [
        { name: "Steak", price: 20 },
        { name: "Wine", price: 15 },
      ];
      expect(foodDelivery.addMenuItem(items, 5)).to.equal("There are 0 available menu items matching your criteria!");
    });

    it("should throw on invalid input", function () {
      expect(() => foodDelivery.addMenuItem("not array", 10)).to.throw("Invalid Information!");
      expect(() => foodDelivery.addMenuItem([], 10)).to.throw("Invalid Information!");
      expect(() => foodDelivery.addMenuItem([{ name: "A", price: 2 }], "price")).to.throw("Invalid Information!");
      expect(() => foodDelivery.addMenuItem([{ name: "A", price: 2 }], 3)).to.throw("Invalid Information!");
    });
  });

  describe("calculateOrderCost()", function () {
    it("should calculate without discount", function () {
      const result = foodDelivery.calculateOrderCost(["standard"], ["sauce", "beverage"], false);
      expect(result).to.equal("You spend $7.50 for shipping and addons!");
    });

    it("should calculate with discount", function () {
      const result = foodDelivery.calculateOrderCost(["express"], ["sauce"], true);
      expect(result).to.equal("You spend $5.10 for shipping and addons with a 15% discount!");
    });

    it("should calculate total correctly with multiple entries", function () {
      const result = foodDelivery.calculateOrderCost(["standard", "express"], ["sauce", "beverage", "sauce"], false);
      // 3 + 5 + 1 + 3.5 + 1 = 13.5
      expect(result).to.equal("You spend $13.50 for shipping and addons!");
    });

    it("should round correctly", function () {
      const result = foodDelivery.calculateOrderCost(["express"], ["beverage"], true);
      // 5 + 3.5 = 8.5 * 0.85 = 7.225 => 7.23
      expect(result).to.equal("You spend $7.23 for shipping and addons with a 15% discount!");
    });

    it("should throw on invalid input", function () {
      expect(() => foodDelivery.calculateOrderCost("standard", [], true)).to.throw("Invalid Information!");
      expect(() => foodDelivery.calculateOrderCost([], "addons", false)).to.throw("Invalid Information!");
      expect(() => foodDelivery.calculateOrderCost([], [], "true")).to.throw("Invalid Information!");
    });
  });

});