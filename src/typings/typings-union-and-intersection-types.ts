/**
 * Union types
 */

// size can be "small", "medium", or "large"
type SizeUnion = "small" | "medium" | "large";
// id can be any number or null
type IdUnion = number | null;
/**
 * Union can be of:
 * Any Size (small, medium or large) or
 * Any Id (number or null)
 *
 */
type Union = SizeUnion | IdUnion;

type Pet = {
  id: IdUnion;
  size: SizeUnion;
  union: Union;
};

const dog: Pet = {
  id: 1,
  size: "small",
  union: "large",
};

/**
 * Intersection types
 */

type UserId = number | string;
type ClientId = null | boolean;

/**
 * IdIntersection can only be of type number
 * because is the only type that is in both
 * UserId and IdUnion
 */
type IdIntersection = IdUnion & UserId;

/**
 * BrokenIdIntersection is of type never because
 * there is no type that can be a number and string
 * at the same time
 */
type BrokenIdIntersection = number & string;
